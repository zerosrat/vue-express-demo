const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = mongoose.model('User');

module.exports = {
  create (req, res, next) {
    const { name, password } = req.body;
    if (!name || !password) {
      let err = new Error('Incorrect params');
      err.status = 400;
      next(err);
    } else {
      User.findOne({ name }, (err, user) => {
        if (err) {
          next(err);
        } else {
          if (user) {
            let err = new Error('User already exist');
            err.status = 409;
            next(err);
          } else {
            bcrypt.hash(password, saltRounds, (err, hash) => {
              if (err) {
                next(err)
              } else {
                const newUser = new User({
                  name,
                  password: hash
                });
                newUser.save((err, nuser) => {
                  if (err) {
                    next(err);
                  } else {
                    res.status(201).json({ data: nuser });
                  }
                })
              }
            });

          }
        }
      })
    }
  },

  list (req, res, next) {
    User.find((err, users) => {
      if (err) {
        next(err);
      } else {
        res.json({ data: users });
      }
    })
  },

  getByName (req, res) {
    User.findOne({ name: req.params.name }, (err, user) => {
      if (err) {
        next(err);
      } else {
        if (user) {
          res.json({ data: user });
        } else {
          let err = new Error('User not found');
          err.status = 404;
          next(err);
        }
      }
    });
  },

  delete (req, res) {
    User.findOne({ name: req.params.name }, (err, user) => {
      if (err) {
        next(err);
      } else {
        if (user) {
          User.remove({ name: req.params.name }, (err) => {
            if (err) {
              next(err);
            } else {
              res.json({message: 'Delete successful'});
            }
          });
        } else {
          let err = new Error('User not found');
          err.status = 404;
          next(err);
        }
      }
    });
  }
}
