import * as types from '../mutations'
import session from '../../api/session'

const state = {
  userInfo: JSON.parse(window.sessionStorage.getItem('userInfo')) || {},
  token: window.sessionStorage.getItem('token') || ''
}

const getters = {
  userInfo: state => state.userInfo,
  userToken: state => state.token
}

const actions = {
  signIn ({ commit }, data) {
    commit(types.SIGN_IN, data)
    window.sessionStorage.setItem('userInfo', JSON.stringify(data.user))
    window.sessionStorage.setItem('token', data.token)
  },

  signOut ({ commit }) {
    session.signOut(() => {
      commit(types.SIGN_OUT)
      window.sessionStorage.setItem('userInfo', null)
    })
  }
}

const mutations = {
  [types.SIGN_IN] (state, { user, token }) {
    state.userInfo = user
    state.token = token
  },

  [types.SIGN_OUT] () {
    state.userInfo = {}
    state.token = ''
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
