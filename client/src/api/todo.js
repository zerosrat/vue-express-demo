import axios from 'axios'

export default {
  getList (cb, errorCb) {
    axios.get(`${window.config.API_ORIGIN}/api/todos`)
      .then(res => {
        cb(res)
      })
      .catch(err => {
        errorCb(err)
      })
  },

  addTodo (req, cb, errorCb) {
    axios.post(`${window.config.API_ORIGIN}/api/todos`, req)
      .then(res => {
        cb(res)
      })
      .catch(err => {
        errorCb(err)
      })
  },

  updateTodo (req, cb, errorCb) {
    axios.patch(`${window.config.API_ORIGIN}/api/todos/${req._id}`, req)
      .then(res => {
        cb(res)
      })
      .catch(err => {
        errorCb(err)
      })
  },

  deleteTodo (req, cb, errorCb) {
    axios.delete(`${window.config.API_ORIGIN}/api/todos/${req._id}`, req)
      .then(res => {
        cb(res)
      })
      .catch(err => {
        errorCb(err)
      })
  },
}
