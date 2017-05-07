const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const User = require('../controllers/user')

router.route('/users')
  .post(User.create)
  .get(User.list);

router.route('/users/:name')
  .get(User.getByName)
  .delete(User.delete)

module.exports = router;
