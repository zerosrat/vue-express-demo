import axios from 'axios'
import store from '@/store'

export default {
  getList (cb, errorCb) {
    axios.get(`${window.config.API_ORIGIN}/api/todos?userid=${store.getters.userInfo._id}`, {
      headers: { 'x-access-token': store.getters.userToken }
    })
      .then(res => {
        cb(res)
      })
      .catch(err => {
        errorCb(err)
      })
  },

  addTodo (req, cb, errorCb) {
    axios.post(`${window.config.API_ORIGIN}/api/todos`, req, {
      headers: { 'x-access-token': store.getters.userToken }
    })
      .then(res => {
        cb(res)
      })
      .catch(err => {
        errorCb(err)
      })
  },

  updateTodo (req, cb, errorCb) {
    axios.patch(`${window.config.API_ORIGIN}/api/todos/${req._id}?userid=${req.userid}`, req, {
      headers: { 'x-access-token': store.getters.userToken }
    })
      .then(res => {
        cb(res)
      })
      .catch(err => {
        errorCb(err)
      })
  },

  deleteTodo (req, cb, errorCb) {
    axios.delete(`${window.config.API_ORIGIN}/api/todos/${req._id}?userid=${req.userid}`, {
      headers: { 'x-access-token': store.getters.userToken }
    })
      .then(res => {
        cb(res)
      })
      .catch(err => {
        errorCb(err)
      })
  }
}
