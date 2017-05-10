import Vue from 'vue'

export default {
  signUp (req, cb, errorCb) {
    Vue.axios.post(`${window.config.API_ORIGIN}/api/users`, req)
      .then(res => {
        cb(res)
      })
      .catch(err => {
        errorCb(err)
      })
  }
}
