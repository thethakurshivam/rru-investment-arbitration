const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = 3000;

// Demo credentials (replace with DB in production)
const USERNAME = 'admin';
const PASSWORD = 'password123';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'rru-investment-portal-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, maxAge: 60 * 60 * 1000 } // 1 hour
}));

// Serve static files except dashboard.html
app.use((req, res, next) => {
  if (req.path === '/dashboard.html') {
    if (!req.session.loggedIn) {
      return res.redirect('/login.html');
    }
  }
  next();
});
app.use(express.static(path.join(__dirname)));

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === USERNAME && password === PASSWORD) {
    req.session.loggedIn = true;
    return res.json({ success: true });
  }
  res.status(401).json({ success: false, message: 'Invalid credentials' });
});

// Session check endpoint
app.get('/session', (req, res) => {
  if (req.session.loggedIn) {
    return res.json({ loggedIn: true });
  }
  res.json({ loggedIn: false });
});

// Logout endpoint
app.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ success: true });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
}); 