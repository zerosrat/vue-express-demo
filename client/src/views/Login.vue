<template>
  <div>
    <form>
      <input v-model="username" type="text" placeholder="username">
      <input v-model="password" type="password" placeholder="password">
      <button type="submit" @click.prevent="handleSignin">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleSignin () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
