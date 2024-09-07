const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const generateToken = require('../utils/helper');
const {revokedTokens} =  require("../middlewares/auth.middleware")
// let revokedTokens = new Set();

exports.registerUser = async (req, res) => {
  try {
    const { firstName, lastName, gender, age, phoneNumber, email, password } =
      req.body;
    if (
      !firstName ||
      !lastName ||
      !gender ||
      !age ||
      !phoneNumber ||
      !email ||
      !password
    ) {
      return res
        .status(400)
        .json({ message: 'Please fill the required field' });
    }
    const userCreated = await User.create({
      firstName,
      lastName,
      gender,
      age,
      phoneNumber,
      email,
      password
    });
    return res.status(201).json({
      message: 'User created successfully',
      userCreated
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(401)
        .json({ message: 'Please fill the required field' });
    }
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isPasswordValid = await bcrypt.compare(password, userExist.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Password is incorrect' });
    }

    userData = {
      UserId: userExist._id,
      role: userExist.role
    };

    const token = generateToken(userData);
    res.status(200).json({ message: 'User logged in successfully', token });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};



exports.logoutUser = async (req, res) => {

  // res.cookie('token', ' ', { maxAge: 1 });
  // res.json({ message: 'Logged out successfully' });
  const token = req.headers.authorization?.split(" ")[1] || req.cookies;
  if (token) {
    revokedTokens.add(token); 
  }
  res.clearCookie("token");
  console.log(revokedTokens)
  res.json({ message: 'Logged out successfully' });
};

