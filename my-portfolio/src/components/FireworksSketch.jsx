import React, { useRef } from 'react';
import Sketch from 'react-p5';

const FIREWORK_COLORS = [
  [255, 64, 64, 255],   // Vivid Red
  [255, 184, 28, 255],  // Vivid Amber/Orange
  [64, 224, 64, 255],   // Vivid Green
  [64, 160, 255, 255],  // Vivid Sky Blue
  [200, 64, 255, 255],  // Vivid Purple
];

const PARTICLE_SIZE = 3;           
const PARTICLE_COUNT = 35;         
const EXPLOSION_SPEED_MIN = 0.8;   
const EXPLOSION_SPEED_MAX = 3.0;   
const VELOCITY_DAMPING = 0.88;     
const LIFESPAN_DECAY = 8;

class Particle {
  constructor(p5, x, y, hue) {
    this.p5 = p5;
    this.pos = p5.createVector(x, y);
    this.lifespan = 255;
    this.hue = hue;
    this.acc = p5.createVector(0, 0);

    // 🔧 인스턴스 메서드만 사용 (random2D 대체)
    const angle = this.p5.random(0, this.p5.TWO_PI);
    const speed = this.p5.random(EXPLOSION_SPEED_MIN, EXPLOSION_SPEED_MAX);
    this.vel = this.p5.createVector(this.p5.cos(angle), this.p5.sin(angle)).mult(speed);
  }

  applyForce(force) { this.acc.add(force); }

  update() {
    this.vel.mult(VELOCITY_DAMPING);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.lifespan -= LIFESPAN_DECAY;
  }

  show() {
    this.p5.stroke(this.hue[0], this.hue[1], this.hue[2], this.lifespan);
    this.p5.strokeWeight(PARTICLE_SIZE);
    this.p5.point(this.pos.x, this.pos.y);
  }

  done() { return this.lifespan < 0; }
}

class Firework {
  constructor(p5, targetX, targetY, { instant = false } = {}) {
    this.p5 = p5;
    this.firework = new Particle(p5, p5.random(p5.width), p5.height, [255, 255, 255, 255]);
    this.exploded = false;
    this.particles = [];
    this.target = p5.createVector(targetX, targetY);
    this.color = p5.random(FIREWORK_COLORS);
    if (instant) {
      this.exploded = true;
      this.explode();
    }
  }

  isDone() { return this.exploded && this.particles.length === 0; }

  update() {
    const p5 = this.p5;

    if (!this.exploded) {
      const dist = p5.dist(this.firework.pos.x, this.firework.pos.y, this.target.x, this.target.y);
      if (dist < 10) {
        this.exploded = true;
        this.explode();
      } else {
        // 🔧 Vector.sub 대체: 목표 − 현재 위치
        const force = p5.createVector(
          this.target.x - this.firework.pos.x,
          this.target.y - this.firework.pos.y
        );
        force.setMag(0.15);
        this.firework.applyForce(force);
        this.firework.update();
      }
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(this.p5.createVector(0, 0.05));
      this.particles[i].update();
      if (this.particles[i].done()) this.particles.splice(i, 1);
    }
  }

  explode() {
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      this.particles.push(new Particle(this.p5, this.target.x, this.target.y, this.color));
    }
  }

  show() {
    if (!this.exploded) this.firework.show();
    for (let particle of this.particles) particle.show();
  }
}

const FireworksSketch = () => {
  const fireworksRef = useRef([]);
  let containerEl = null;

  const setup = (p5, canvasParentRef) => {
    containerEl = canvasParentRef.parentElement;
    const rect = containerEl.getBoundingClientRect();
    const w = Math.round(rect.width);
    const h = Math.round(rect.height);
    const cnv = p5.createCanvas(w, h);
    p5.createCanvas(w, h).parent(containerEl);
    p5.pixelDensity(1);
  };

  const draw = (p5) => {
    if (containerEl) {
      const w = Math.round(containerEl.clientWidth);
      const h = Math.round(containerEl.clientHeight);
      if (p5.width !== w || p5.height !== h) {
        p5.resizeCanvas(w, h, true);
      }
    }
    p5.background(0, 25);
    const fireworks = fireworksRef.current;
    for (let i = fireworks.length - 1; i >= 0; i--) {
      const fw = fireworks[i];
      fw.update();
      fw.show();
      if (fw.isDone()) fireworks.splice(i, 1);
    }
  };

  const mousePressed = (p5) => {
    // 텍스트 오버레이 등 다른 요소가 위에 있으면 클릭이 캔버스로 전달 안 될 수 있어요
    if (p5.mouseX > 0 && p5.mouseX < p5.width && p5.mouseY > 0 && p5.mouseY < p5.height) {
      fireworksRef.current.push(new Firework(p5, p5.mouseX, p5.mouseY, { instant: true }));
    }
  };

  const windowResized = (p5) => {
    if (!containerEl) containerEl = p5.canvas?.parentElement;
    if (!containerEl) return;

    const rect = containerEl.getBoundingClientRect();
    const w = Math.round(containerEl.clientWidth);
    const h = Math.round(containerEl.clientHeight);
    p5.resizeCanvas(w, h);
  };

  return <Sketch setup={setup} draw={draw} mousePressed={mousePressed} windowResized={windowResized} />;
};

export default FireworksSketch;
