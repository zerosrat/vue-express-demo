import * as types from '../mutations'
import session from '../../api/session'

const state = {
  userInfo: JSON.parse(window.sessionStorage.getItem('user')) || {}
}

const getters = {
  userInfo: state => state.userInfo
}

const actions = {
  signIn ({ commit }, req) {
    session.signIn(
      req,
      (userInfo) => {
        commit(types.SIGN_IN, { userInfo })
        window.sessionStorage.setItem('user', JSON.stringify(userInfo))
      }
    )
  },

  signOut ({ commit }) {
    session.signOut(() => {
      commit(types.SIGN_OUT)
      window.sessionStorage.setItem('user', null)
    })
  }
}

const mutations = {
  [types.SIGN_IN] (state, { userInfo }) {
    state.userInfo = userInfo
  },

  [types.SIGN_OUT] () {
    state.userInfo = {}
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
