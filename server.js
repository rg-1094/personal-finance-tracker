const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const db = new sqlite3.Database('./finance.db');

// Initialize database
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS expenses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category TEXT,
      amount REAL,
      date TEXT
    )
  `);
});

function deleteExpensesFromDatabase(){
  db.run('VACUUM', (err) => {
    if (err) {
      console.error('Error shrinking database:', err.message);
    }
  });
}

// Middleware
app.use(express.json());
app.use(express.static('public'));

// API Routes
app.get('/expenses', (req, res) => {
  db.all('SELECT * FROM expenses', (err, rows) => {
    res.json(rows);
  });
});

app.post('/expense', (req, res) => {
  const { category, amount, date } = req.body;
  db.run(
    'INSERT INTO expenses (category, amount, date) VALUES (?, ?, ?)',
    [category, amount, date],
    function(err) {
      if (err) return res.status(500).send(err.message);
      res.status(201).json({ id: this.lastID });
    }
  );
});

app.delete('/expense/:id', (req, res) => {
  db.run('DELETE FROM expenses WHERE id = ?', [req.params.id], function(err) {
    if (err) return res.status(500).send(err.message);
    deleteExpensesFromDatabase();
    res.sendStatus(204);
  });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});