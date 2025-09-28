#!/bin/bash

# Video compression script for portfolio optimization
# This script will compress your videos to reduce file sizes while maintaining quality

echo "Starting video compression..."

# Create compressed videos directory
mkdir -p src/assets/videos/compressed

# Function to compress video
compress_video() {
    local input_file="$1"
    local output_file="$2"
    local quality="$3"
    
    echo "Compressing $input_file..."
    
    # Use ffmpeg to compress the video
    # -crf 28: Constant Rate Factor (lower = better quality, higher = smaller file)
    # -preset slow: Better compression efficiency
    # -movflags +faststart: Optimize for web streaming
    # -vf scale: Scale down if needed (optional)
    ffmpeg -i "$input_file" \
        -c:v libx264 \
        -crf "$quality" \
        -preset slow \
        -movflags +faststart \
        -c:a aac \
        -b:a 128k \
        -y \
        "$output_file"
    
    # Show file size comparison
    original_size=$(du -h "$input_file" | cut -f1)
    compressed_size=$(du -h "$output_file" | cut -f1)
    echo "Original: $original_size -> Compressed: $compressed_size"
}

# Compress each video with different quality settings
compress_video "src/assets/videos/SoundlogVideo.mov" "src/assets/videos/compressed/SoundlogVideo.mov" 28
compress_video "src/assets/videos/MiniBlogVideo.mov" "src/assets/videos/compressed/MiniBlogVideo.mov" 28
compress_video "src/assets/videos/MiniMovieLogVideo.mov" "src/assets/videos/compressed/MiniMovieLogVideo.mov" 28
compress_video "src/assets/videos/PacmanVideo.mov" "src/assets/videos/compressed/PacmanVideo.mov" 28

echo "Video compression complete!"
echo "Compressed videos are in src/assets/videos/compressed/"
echo "You can now replace the original videos with the compressed versions."
echo ""
echo "To replace originals with compressed versions:"
echo "mv src/assets/videos/compressed/*.mov src/assets/videos/"
