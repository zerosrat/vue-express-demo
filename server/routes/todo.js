const express = require('express');
const router = express.Router();
const Auth = require('../controllers/auth');
const Todo = require('../controllers/todo');

router.route('/todos')
  .post(Auth.verify, Todo.create)
  .get(Auth.verify, Todo.list);

router.route('/todos/:_id')
  .get(Auth.verify, Todo.getById)
  .patch(Auth.verify, Todo.updateById)
  .delete(Auth.verify, Todo.delete);

module.exports = router;
