const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const config = require('../config/config');
const User = mongoose.model('User');

module.exports = {
  create (req, res, next) {
    User.findOne({ name: req.body.name }, (err, user) => {
      if (err) {
        next(err);
      } else {
        if (!user) {
          let err = new Error('Authenticate failed: user not found');
          err.status = 404;
          next(err);
        } else {
          if (user.password !== req.body.password) {
            let err = new Error('Authenticate failed: wrong password.');
            err.status = 401;
            next(err);
          } else {
            let token = jwt.sign(user, config.secret);
            res.status(201).json({
              message: 'Sign in successfully',
              token: token
            });
          }
        }
      }
    })
  }
}
