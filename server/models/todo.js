const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  text: String,
  done: Boolean,
  userid: String
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo;
