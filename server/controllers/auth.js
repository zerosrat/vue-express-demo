const config = require('../config/config');
const jwt = require('jsonwebtoken');

module.exports = {
  verify (req, res, next) {
    const token = req.body.token || (req.header('authorization') && req.header('authorization').split('Bearer ')[1])
    if (token) {
      jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
          err.status = 401;
          next(err);
        } else {
          next()
        }
      })
    } else {
      let err = new Error('No token provided');
      err.status = 401;
      next(err);
    }
  }
}
