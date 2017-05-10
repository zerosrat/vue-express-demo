import Vue from 'vue'

export default {
  signIn (req, cb, errorCb) {
    Vue.axios.post(`${window.config.API_ORIGIN}/api/sessions`, req)
      .then(res => {
        cb(res)
      })
      .catch(err => {
        errorCb(err)
      })
  }
}
