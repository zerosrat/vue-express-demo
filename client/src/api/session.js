import axios from 'axios'

export default {
  signIn (req, cb, errorCb) {
    axios.post(`${window.config.API_ORIGIN}/api/session`, req)
      .then(res => {
        cb(res)
      })
      .catch(err => {
        errorCb(err)
      })
  },
  signOut (cb) {
    setTimeout(() => {
      // router.push({ name: 'signin' })
      cb()
    }, 100)
  }
}
