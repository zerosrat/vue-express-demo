<template>
  <li class="todo" :class="{ completed: todo.done, editing: editing }">
    <div class="view">
      <input class="toggle"
        type="checkbox"
        :checked="todo.done"
        @change="updateTodo({done: $event.target.checked})">
      <label v-text="todo.text" @dblclick="editing = true"></label>
      <button class="destroy" @click="deleteTodo"></button>
    </div>
    <input class="edit"
      v-show="editing"
      v-focus="editing"
      :value="todo.text"
      @keyup.enter="doneEdit"
      @keyup.esc="cancelEdit"
      @blur="doneEdit">
  </li>
</template>

<script>
export default {
  name: 'Todo',
  props: ['todo'],
  data () {
    return {
      editing: false
    }
  },
  directives: {
    focus (el, { value }, { context }) {
      if (value) {
        context.$nextTick(() => {
          el.focus()
        })
      }
    }
  },
  methods: {
    doneEdit (e) {
      const text = e.target.value.trim()
      if (!text) {
        this.deleteTodo()
      } else if (this.editing) {
        this.updateTodo({ text })
        this.editing = false
      }
    },
    cancelEdit (e) {
      e.target.value = this.todo.text
      this.editing = false
    },
    updateTodo (prop) {
      const newTodo = Object.assign({}, this.todo, prop)
      this.$store.dispatch('updateTodo', {
        newTodo,
        todo: this.todo
      })
    },
    deleteTodo () {
      this.$store.dispatch('deleteTodo', this.todo)
    }
  }
}
</script>
