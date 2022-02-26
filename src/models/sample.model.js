const mongoose = require('mongoose');

// To create a Blood Sample Schema
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

// To convert bloodSample_Schema into a model of 'userSample'
const bloodSample_Model = mongoose.model('userSample', bloodSample_Schema);
module.exports = bloodSample_Model;
