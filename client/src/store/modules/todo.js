import todoAPI from '@/api/todo'
import * as types from '../mutations'
import Vue from 'vue'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

const state = {
  todos: []
}

const getters = {
  todos: state => state.todos
}

const actions = {
  getAllTodos ({ commit }) {
    todoAPI.getList(
      ({ data }) => {
        commit(types.GET_TODOS, { todos: data.data })
      },
      err => {
        if (err.response.data) {
          Vue.prototype.$message.error(err.response.data.message)
        }
      }
    )
  },

  addTodo ({ commit, dispatch }, todo) {
    todoAPI.addTodo(
      todo,
      () => {
        dispatch('getAllTodos')
      },
      err => {
        if (err.response.data) {
          Vue.prototype.$message.error(err.response.data.message)
        }
      }
    )
  },

  updateTodo ({ commit }, { newTodo, todo }) {
    todoAPI.updateTodo(
      newTodo,
      () => {
        commit(types.UPDATE_TODOS, { newTodo, todo })
      },
      err => {
        if (err.response.data) {
          Vue.prototype.$message.error(err.response.data.message)
        }
      }
    )
  },

  deleteTodo ({ commit }, todo) {
    todoAPI.deleteTodo(
      todo,
      () => {
        commit(types.DELETE_TODOS, todo)
      },
      err => {
        if (err.response.data) {
          Vue.prototype.$message.error(err.response.data.message)
        }
      }
    )
  }
}

const mutations = {
  [types.GET_TODOS] (state, { todos }) {
    state.todos = todos
  },

  [types.UPDATE_TODOS] (state, { newTodo, todo }) {
    Object.assign(todo, { text: newTodo.text, done: newTodo.done })
  },

  [types.DELETE_TODOS] (state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  }

  // addTodo (state, { text }) {
  //   state.todos.push({
  //     text,
  //     done: false
  //   })
  // },

  // toggleTodo (state, { todo }) {
  //   todo.done = !todo.done
  // },
  //
  // editTodo (state, { todo, value }) {
  //   todo.text = value
  // },

  // toggleAll (state, { done }) {
  //   state.todos.forEach((todo) => {
  //     todo.done = done
  //   })
  // },
  //
  // clearCompleted (state) {
  //   state.todos = state.todos.filter(todo => !todo.done)
  // }
}

export default {
  state,
  getters,
  actions,
  mutations
}
