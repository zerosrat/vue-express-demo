const express = require('express');
const router = express.Router();
const Auth = require('../controllers/auth');
const User = require('../controllers/user');

router.route('/users')
  .post(User.create)
  .get(Auth.verify, User.list);

router.route('/users/:name')
  .get(Auth.verify, User.getByName)
  .delete(Auth.verify, User.delete);

module.exports = router;
