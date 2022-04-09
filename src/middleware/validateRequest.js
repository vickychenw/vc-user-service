import { validationResult } from 'express-validator';
import { status400 } from '../constants/httpStatus';
/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const validateRequest = (req, res, next) => {
  const errors = validationResult(req).array();

  if (errors.length) {
    return res.status(status400).json({ errors });
  }

  return next();
};

module.exports = validateRequest;
