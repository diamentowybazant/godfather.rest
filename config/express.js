const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const corsOptions = {
  methods: 'GET',
  optionsSuccessStatus: 200,
  origin: process.env.APP_PATH,
};

const app = express();

app.use(helmet());
app.use(cors(corsOptions));

module.exports = app;
