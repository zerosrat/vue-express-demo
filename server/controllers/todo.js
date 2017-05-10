const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');

module.exports = {
  create (req, res, next) {
    const { text, done, userid } = req.body;
    const { _id } = req.params;

    if (!(text && typeof done === "boolean" && userid)) {
      let err = new Error('Incorrect params');
      err.status = 400;
      next(err);
    } else {
      let newTodo = new Todo(req.body);
      newTodo.save((err, ntd) => {
        if (err) {
          next(err);
        } else {
          res.status(201).json({ data: ntd });
        }
      })
    }
  },

  list (req, res, next) {
    const { userid } = req.query;

    if (!userid) {
      let err = new Error('User id required');
      err.status = 403;
      next(err);
    } else {
      Todo.find({ userid }, (err, todos) => {
        if (err) {
          next(err);
        } else {
          res.json({ data: todos });
        }
      })
    }
  },

  getById (req, res, next) {
    const { userid } = req.query;
    const { _id } = req.params;

    if (!userid) {
      let err = new Error('User id required');
      err.status = 403;
      next(err);
    } else {
      Todo.findOne({ _id, userid }, (err, todo) => {
          if (err) {
            next(err);
          } else {
            if (!todo) {
              let err = new Error('Todo not found');
              err.status = 404;
              next(err);
            } else {
              res.json({ data: todo });
            }
          }
        }
      );
    }
  },

  updateById (req, res, next) {
    const { text, done } = req.body;
    const { userid } = req.query;
    const { _id } = req.params;

    if (!userid) {
      let err = new Error('User id required');
      err.status = 403;
      next(err);
    } else if (!(text || typeof done === "boolean")) {
      let err = new Error('Incorrect params');
      err.status = 400;
      next(err);
    } else {
      Todo.findOneAndUpdate(
        {
          _id,
          userid
        },
        req.body,
        (err, todo) => {
          if (err) {
            next(err);
          } else {
            if (!todo) {
              let err = new Error('Todo not found');
              err.status = 404;
              next(err);
            } else {
              res.json({ message: 'Update successfully' });
            }
          }
        }
      );
    }
  },

  delete (req, res, next) {
    const { userid } = req.query;
    const { _id } = req.params;

    if (!userid) {
      let err = new Error('User id required');
      err.status = 403;
      next(err);
    } else {
      Todo.findOneAndRemove({ _id, userid }, (err, todo) => {
        if (err) {
          next(err);
        } else {
          if (!todo) {
            let err = new Error('Todo not found');
            err.status = 404;
            next(err);
          } else {
            res.json({ message: 'Delete successfully' });
          }
        }
      })
    }
  }
}
