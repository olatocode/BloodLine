const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const secrete = process.env.JWT_SECRET;

const generateToken = (userData) => {
  return jwt.sign(userData, secrete, {
    expiresIn: '1h'
  });
};

module.exports = generateToken;
