const express = require('express');
const userSample = require('../controllers/sample.controller');
const { authenticate, authorize } = require('../middlewares/auth.middleware');
const router = express.Router();

// These are the Blood Sample route APIs e.g '/addBloodSample'
router.post(
  '/addBloodSample',
  authenticate,
  authorize('admin'),
  userSample.createUserSample
);

router.get('/viewBloodSamples', authenticate, userSample.fetchAllUserSample);

router.get(
  '/viewOneBloodSample/:id',
  authenticate,
  userSample.fetchAUserSample
);

router.patch(
  '/updateBloodSample/:id',
  authenticate,
  authorize('admin'),
  userSample.updateAUserSample
);

router.delete(
  '/deleteBloodSample/:id',
  authenticate,
  authorize('admin'),
  userSample.deleteAUserSample
);

module.exports = router;
