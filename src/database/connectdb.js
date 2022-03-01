const mongoose = require('mongoose');

// connect to mongodb
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Database is connected');
  } catch (error) {
    console.log(error.message);
    console.log(`Database Not Connected`);
  }
};

module.exports = connectDB();
