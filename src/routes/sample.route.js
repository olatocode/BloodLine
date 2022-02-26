const Sample = require('../controllers/sample.controller');
const express = require('express');
const router = express.Router();

router.post('/addSample', Sample.createSample);

router.get('/fetchUserSample/:id', Sample.retrieveSampleCreatedByUser);

module.exports = router;
