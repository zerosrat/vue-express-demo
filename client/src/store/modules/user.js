import * as types from '../mutations'
import sessionAPI from '../../api/session'
import router from '@/router'
import Vue from 'vue'

const state = {
  userInfo: JSON.parse(window.sessionStorage.getItem('userInfo')) || {},
  token: window.sessionStorage.getItem('token') || ''
}

const getters = {
  userInfo: state => state.userInfo,
  userToken: state => state.token
}

const actions = {
  signIn ({ commit }, req) {
    sessionAPI.signIn(
      req,
      ({ data }) => {
        commit(types.SIGN_IN, data.data)
        window.sessionStorage.setItem('userInfo', JSON.stringify(data.data.user))
        window.sessionStorage.setItem('token', data.data.token)
        router.push({ name: 'home' })
      },
      err => {
        if (err.response.data) {
          Vue.prototype.$message.error({ message: err.response.data.message })
        }
      }
    )
  },

  signOut ({ commit }) {
    window.sessionStorage.setItem('userInfo', JSON.stringify({}))
    window.sessionStorage.setItem('token', '')
    commit(types.SIGN_OUT)
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
