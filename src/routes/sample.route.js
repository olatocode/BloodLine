const userSample = require('../controllers/sample.controller');
const express = require('express');
const router = express.Router();

// These are the Blood Sample route APIs e.g '/addBloodSample'
router.post('/addBloodSample', userSample.createUserSample);

router.get('/viewBloodSamples', userSample.fetchAllUserSample);

router.get('/viewOneBloodSample/:id', userSample.fetchAUserSample);

router.patch('/updateBloodSample/:id', userSample.updateAUserSample);

router.delete('/deleteBloodSample/:id', userSample.deleteAUserSample);

module.exports = router;
