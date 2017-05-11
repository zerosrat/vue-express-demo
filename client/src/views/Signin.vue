<template>
  <div>
    <form>
      <input v-model="name" type="text" placeholder="username">
      <input v-model="password" type="password" placeholder="password">
      <button class="button" type="submit" @click.prevent="handleSignin">Sign in</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    handleSignin () {
      this.$store.dispatch('signIn', {
        name: this.name,
        password: this.password
      })
    }
  }
}
</script>
