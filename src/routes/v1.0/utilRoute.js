const express = require('express');
const {
  status200,
  status201,
  status204,
  status404,
  status500
} = require('../../constants/httpStatus');

const util = express.Router();

util.get('/', (req, res) => {
  res.send('/util request');
});

module.exports = util;
