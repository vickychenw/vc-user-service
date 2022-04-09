const express = require('express');
const userRoute = require('./userRoute');
const utilRoute = require('./utilRoute');
const notesRoute = require('./notesRoute');

const router = express.Router();

router.use('/user', userRoute);
router.use('/util', utilRoute);
router.use('/notes', notesRoute);
module.exports = router;
