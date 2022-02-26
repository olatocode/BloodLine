const userSample = require('../models/sample.model');

exports.createUserSample = async (req, res, next) => {
  try {
    const { userName, gender, age, phoneNumber, rhesusFactor, bloodGroup } =
      req.body;
    if (
      !userName ||
      !gender ||
      !age ||
      !phoneNumber ||
      !rhesusFactor ||
      !bloodGroup
    ) {
      return res
        .status(401)
        .json({ message: 'Please fill the required field' });
    }
    const bloodSample_Created = await userSample.create({
      userName,
      gender,
      age,
      phoneNumber,
      rhesusFactor,
      bloodGroup
    });
    return res.status(201).json({
      message: 'Blood Sample created successfully',
      bloodSample_Created
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

exports.fetchAllUserSample = async (req, res) => {
  try {
    const showAll_BloodSample = await find();

    return res.status(200).json({
      message: 'Blood Sample shown successfully',
      showAll_BloodSample
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

exports.updateAUserSample = async (req, res) => {
  try {
    const { id } = req.params;
    const userSample_Updated = await userSample.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        new: true
      }
    );
    return res.status(200).json({
      message: 'Blood Sample updated Successfully',
      userSample_Updated
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

exports.deleteAUserSample = async (req, res) => {
  try {
    const { id } = req.params;
    const userSample_Deleted = await userSample.deleteOne({ _id: id });
    return res.status(200).json({
      message: 'Blood Sample deleted Successfully',
      userSample_Deleted
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};
