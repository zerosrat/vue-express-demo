import router from '@/router'

const _userInfo = {
  id: 'z001',
  name: 'zero'
}

export default {
  signIn (req, cb) {
    setTimeout(() => {
      router.push({ name: 'home' })
      cb(Object.assign({}, _userInfo, req))
    }, 100)
  },
  signOut (cb) {
    setTimeout(() => {
      // router.push({ name: 'signin' })
      cb()
    }, 100)
  }
}
