// index.js

const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Get all projects
app.get('/projects', async (req, res) => {
  const projects = await prisma.project.findMany();
  res.json({ projects });
});

// Get project by ID
app.get('/projects/:id', async (req, res) => {
  const { id } = req.params;
  const project = await prisma.project.findUnique({ where: { id: parseInt(id) } });

  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }

  res.json({ project });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:${PORT}");
});