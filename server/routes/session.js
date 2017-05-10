const express = require('express');
const router = express.Router();
const Session = require('../controllers/session');

router.route('/sessions')
  .post(Session.create)

module.exports = router;
