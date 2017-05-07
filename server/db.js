const mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb://localhost/vue-express-demo')

require('./models/user');
