const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = {
  create (req, res, next) {
    if (!req.body.name && !req.body.password) {
      let err = new Error('Incorrect params');
      err.status = 400;
      next(err);
    } else {
      User.findOne({ name: req.body.name }, (err, user) => {
        if (err) {
          next(err);
        } else {
          if (user) {
            let err = new Error('Already exist');
            err.status = 409;
            next(err);
          } else {
            let newUser = new User(req.body);
            newUser.save((err, nuser) => {
              if (err) {
                next(err);
              } else {
                res.status(201).json(nuser);
              }
            })
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
        res.json(users);
      }
    })
  },

  getByName (req, res) {
    User.findOne({ name: req.params.name }, (err, user) => {
      if (err) {
        next(err);
      } else {
        if (user) {
          res.json(user);
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
