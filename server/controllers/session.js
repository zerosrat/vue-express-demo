const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/config');
const User = mongoose.model('User');

module.exports = {
  create (req, res, next) {
    const { name, password } = req.body;
    User.findOne({ name }, (err, user) => {
      if (err) {
        next(err);
      } else {
        if (!user) {
          let err = new Error('Authenticate failed: user not found');
          err.status = 404;
          next(err);
        } else {
          bcrypt.compare(password, user.password, function(err, confirmed) {
            if (confirmed) {
              const payload = {
                id: user._id,
                name: user.name
              };
              const token = jwt.sign(payload, config.secret);
              res.status(201).json({
                message: 'Sign in successfully',
                data: {
                  token,
                  user
                }
              });
            } else {
              let err = new Error('Authenticate failed: wrong password.');
              err.status = 401;
              next(err);
            }
          });
        }
      }
    })
  }
}
