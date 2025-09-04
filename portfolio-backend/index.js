const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

// middleware setup
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("backend server was successfully executed");
});

app.get('/api/projects', (req, res) => {
    const projects = [
        { id: 1, title: "Portfolio Site", description: "Created using React and Node.js" },
        { id: 2, title: "Mini Blog", description: "Made with Gatsby and GraphQL" }
    ];
    res.json(projects);
});

app.listen(PORT, () => {
    console.log(`Server is executed on http://localhost:${PORT}`);
});