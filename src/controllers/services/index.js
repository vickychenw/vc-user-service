export const getUUID = () => {
  const crypto = require('crypto');
  const randomStr = crypto.randomBytes(20).toString('hex');

  return randomStr;
};
