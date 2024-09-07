const { registerUser, loginUser, logoutUser } = require('../controllers/user.controller');
const { authenticate} = require('../middlewares/auth.middleware');

const express = require('express');
const router = express.Router();

router.post('/auth/register', registerUser);
router.post('/auth/login', loginUser);
router.post('/auth/logout', logoutUser);


module.exports = router;
