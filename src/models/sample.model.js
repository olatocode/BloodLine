const mongoose = require('mongoose');
const bloodSample_Schema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    age: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },

    rhesusFactor: {
      type: String,
      required: true
    },
    bloodGroup: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

// To convert bloodSample_Schema into a model of 'User'
const sampleModel = mongoose.model('userSample', bloodSample_Schema);
module.exports = sampleModel;
