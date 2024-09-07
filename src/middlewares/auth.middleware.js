const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const secrete = process.env.JWT_SECRET;

const revokedTokens = new Set();

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).send('Access denied. No token provided.');
  const token = authHeader.split(' ')[1];
  if (token && revokedTokens.has(token)) {
    return res.status(401).send('Access denied. Token revoked.');
  }
  try {
    const decoded = jwt.verify(token, secrete);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send('Invalid token.');
  }
};

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      return res.status(403).send('Forbidden.');

    next();
  };
};

module.exports = { authenticate, authorize, revokedTokens };
