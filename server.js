const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const dbPath = path.join(__dirname, 'db.json');

function initDb() {
  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify({ users: [{ username: 'admin', password: '1234' }], contacts: [] }, null, 2));
  }
}

function readDb() {
  return JSON.parse(fs.readFileSync(dbPath, 'utf8'));
}

function writeDb(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

initDb();

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ success: false, error: 'Fill all fields' });
  }

  const db = readDb();
  const user = db.users.find((item) => item.username === username && item.password === password);

  if (!user) {
    return res.status(401).json({ success: false, error: 'Invalid username or password' });
  }

  res.json({ success: true });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Fill all fields' });
  }

  const db = readDb();
  db.contacts.push({ id: Date.now(), name, email, message, createdAt: new Date().toISOString() });
  writeDb(db);

  res.json({ success: true });
});

app.get('/api/contacts', (req, res) => {
  const db = readDb();
  res.json(db.contacts);
});

app.get('/api/users', (req, res) => {
  const db = readDb();
  res.json(db.users.map((user) => ({ username: user.username })));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});