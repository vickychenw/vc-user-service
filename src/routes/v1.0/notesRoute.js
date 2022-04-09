const express = require('express');
const fs = require('fs');
const {
  status200,
  status201,
  status204,
  status404,
  status500
} = require('../../constants/httpStatus');
const path = require('path');
const dirname = path.join(__dirname, '../../public');

const notes = express.Router();

notes.get('/', (req, res) => {
  res.send('success');
});

notes.post('/', (req, res) => {
  const { data } = req.body;
  const filePath = path.join(dirname, 'notes.txt');
  fs.writeFile(filePath, data, (err) => {
    if (err) throw err;
  });

  res.send('success');
});

module.exports = notes;
