const httpStatus403 = 403;
/**
 * Middleware to authenticate call with shared Key
 * @param {string} authHeader - Request Header Name
 * @param {string} sharedKey - Shared Key GUID V4
 */
const validateAPIKey = (authHeader, sharedKey) => {
  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  const middlewareFn = (req, res, next) => {
    if (!req.headers[authHeader] || req.headers[authHeader] !== sharedKey) {
      return res.sendStatus(httpStatus403);
    }

    // Continue to next function
    return next();
  };

  return middlewareFn;
};

module.exports = validateAPIKey;
