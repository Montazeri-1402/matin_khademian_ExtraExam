const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('mydatabase.db');

// Create projects table if not exists
db.run('CREATE TABLE IF NOT EXISTS projects (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)');

// Insert sample data for demonstration purposes
const sampleProjects = ['Project A', 'Project B', 'Project C'];

sampleProjects.forEach((projectName) => {
  db.run('INSERT INTO projects (name) VALUES (?)', [projectName], (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Inserted project: ${projectName}");
    }
  });
});

// Close the database connection
db.close();