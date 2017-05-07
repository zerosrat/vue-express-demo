import axios from 'axios'

export default {
  signUp (req, cb, errorCb) {
    axios.post(`${window.config.API_ORIGIN}/api/users`, req)
      .then(res => {
        cb(res)
      })
      .catch(err => {
        errorCb(err)
      })
  }
}
