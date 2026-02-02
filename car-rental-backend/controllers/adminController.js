const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
  const { username, password } = req.body;

  const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '8h' });
    return res.json({ ok: true, token });
  }

  return res.status(401).json({ ok: false, message: 'Invalid credentials' });
};
