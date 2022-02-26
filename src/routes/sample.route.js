const userSample = require('../controllers/sample.controller');
const express = require('express');
const router = express.Router();

router.post('/addBloodSample', userSample.createUserSample);

router.get('/viewBloodSamples/:id', userSample.fetchAllUserSample);

router.patch('/updateBloodSample/:id', userSample.updateAUserSample);

router.delete('/deleteBloodSample/:id', userSample.deleteAUserSample);

module.exports = router;
