import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import todo from './modules/todo'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    todo
  }
})

export default store
