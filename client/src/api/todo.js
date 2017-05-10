import Vue from 'vue'
import store from '@/store'

export default {
  getList (cb, errorCb) {
    Vue.axios.get(`${window.config.API_ORIGIN}/api/todos?userid=${store.getters.userInfo._id}`)
      .then(res => {
        cb(res)
      })
      .catch(err => {
        errorCb(err)
      })
  },

  addTodo (req, cb, errorCb) {
    Vue.axios.post(`${window.config.API_ORIGIN}/api/todos`, req)
      .then(res => {
        cb(res)
      })
      .catch(err => {
        errorCb(err)
      })
  },

  updateTodo (req, cb, errorCb) {
    Vue.axios.patch(`${window.config.API_ORIGIN}/api/todos/${req._id}?userid=${req.userid}`, req)
      .then(res => {
        cb(res)
      })
      .catch(err => {
        errorCb(err)
      })
  },

  deleteTodo (req, cb, errorCb) {
    Vue.axios.delete(`${window.config.API_ORIGIN}/api/todos/${req._id}?userid=${req.userid}`)
      .then(res => {
        cb(res)
      })
      .catch(err => {
        errorCb(err)
      })
  }
}
