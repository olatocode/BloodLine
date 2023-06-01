const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');
const treblle = require('@treblle/express');
const userSampleRouter = require('./routes/sample.route');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());
dotenv.config();
app.use(
  treblle({
    apiKey: process.env.TREBLLE_API_KEY,
    projectId: process.env.TREBLLE_PROJECT_ID
  })
);

const port = process.env.PORT;

// extracting database connection
const connect = require('./database/connectdb');
connect;

app.all('/', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
    return res.status(200).json({});
  }
  next();
});

// baser url
app.get('/', (req, res) => {
  res.send({
    message: 'BloodLine App'
  });
});

// base url for the app path in postman
app.use('/api/v1', userSampleRouter);

app.listen(port, () => {
  console.log(`BloodLine is listening on port: ${port}`);
});
