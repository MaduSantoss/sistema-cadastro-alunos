const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("database.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS alunos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      idade INTEGER NOT NULL,
      curso TEXT
    )
  `);
});

module.exports = db;
