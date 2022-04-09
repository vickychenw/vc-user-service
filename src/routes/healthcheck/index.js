import express from 'express';
import { status200 } from '../../constant/httpStatus';
import { getUserProfileByID } from '../../controllers/userController';
const healthcheck = express.Router();

healthcheck.get('/', async (req, res) => {
  try {
    //check get userprofile by id to make sure app is up running and returning data

    res.status(status200).send('UP');
  } catch (err) {
    res.status(status200).send('DOWN');
  }
});
export default healthcheck;
