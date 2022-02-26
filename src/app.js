const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const userSampleRouter = require('./routes/sample.route');
const app = express();
app.use(express.json());
app.use(morgan('dev'));
dotenv.config();
const port = process.env.PORT;

// extracting database connection
const database = require('./database/connectdb');
database.connectDB();

// baser url
app.get('/', (req, res) => {
  res.json({
    message: 'base url'
  });
});

// baser url for the app path

app.use('/api/v1', userSampleRouter);

app.listen(port, () => {
  console.log(`BloodLine is listening on port: ${port}`);
});
