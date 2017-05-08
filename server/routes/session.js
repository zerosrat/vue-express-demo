const express = require('express');
const router = express.Router();
const Session = require('../controllers/session');

router.route('/session')
  .post(Session.create)

module.exports = router;
