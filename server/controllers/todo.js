const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');

module.exports = {
  create (req, res, next) {
    if (!(req.body.text && typeof req.body.done === "boolean")) {
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
    Todo.find((err, todos) => {
      if (err) {
        next(err);
      } else {
        res.json({ data: todos });
      }
    })
  },

  updateById (req, res, next) {
    if (!(req.body.text || typeof req.body.done === "boolean")) {
      let err = new Error('Incorrect params');
      err.status = 400;
      next(err);
    } else {
      // Todo.findOneAndUpdate({ _id: req.params._id }, (err, todo) => {
      //   if (err) {
      //     next(err);
      //   } else {
      //     if (todo) {
      //       todo.text = req.body.text;
      //       todo.done = req.body.done;
      //       todo.save((err, td)=> {
      //         if (err) {
      //           next(err);
      //         } else {
      //           res.json({ message: 'Update successfully' });
      //         }
      //       })
      //     } else {
      //       let err = new Error('Todo not found');
      //       err.status = 404;
      //       next(err);
      //     }
      //   }
      // });
      Todo.findByIdAndUpdate(req.params._id, req.body, (err, todo) => {
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
      })
    }
  },

  delete (req, res, next) {
    Todo.findByIdAndRemove(req.params._id, (err, todo) => {
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
