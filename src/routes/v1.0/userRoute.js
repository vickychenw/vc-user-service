const express = require('express');
import { body, oneOf, header } from 'express-validator';
const {
  status200,
  status201,
  status204,
  status404,
  status500
} = require('../../constants/httpStatus');

const {
  addNewUserProfile,
  getAllUserProfile,
  getUserProfileByID,
  updateUserProfile,
  deleteUserProfile,
  getAllUserProfiles
} = require('../../controllers/mongo/userController');

const validateRequest = require('../../middleware/validateRequest');
//import validateRequest from '../../middleware/validateRequest';

const maxStringLen100 = 100;

const user = express.Router();

//Demo use of middleware, not in used
user.get(
  '/profiles',
  (req, res, next) => {
    //middleware
    console.log(`GET Request from: ${req.originalUrl}`);
    console.log(`GET Request type: ${req.method}`);
    next();
  },

  /*eslint-disable no-unused-vars*/
  (req, res, next) => {
    res.send('GET request for user');
  }
);

user.get('/', getAllUserProfiles);
user.post(
  '/',
  [
    body('firstName').isString().isLength({ max: 255 }),
    body('lastName').isString().isLength({ max: 255 }),
    body('email').isString().isLength({ max: 255 })
  ],
  validateRequest,
  async (req, res) => {
    try {
      const result = await addNewUserProfile(req.body);
      console.log('>>>result = ', result);

      return res.sendStatus(status201);
    } catch (err) {
      console.log(err);
      return res.sendStatus(status500);
    }
  }
);

user.get('/:userId', getUserProfileByID);
user.put('/:userId', updateUserProfile);
user.delete('/:userId', deleteUserProfile);

user.get('/:id', (req, res) => {
  try {
    const clientId = req.param.id;

    //validate inputs
    //call service

    //return
    res.sendStatusCode(200);
  } catch (err) {
    //log the error
    return res.status(500).send(err);
  }
});

module.exports = user;
