<template>
  <div>
    <form>
      <input v-model="name" type="text" placeholder="username">
      <input v-model="password" type="password" placeholder="password">
      <button type="submit" @click.prevent="handleSignin">Sign in</button>
    </form>
  </div>
</template>

<script>
import sessionAPI from '@/api/session'

export default {
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    handleSignin () {
      sessionAPI.signIn(
        {
          name: this.name,
          password: this.password
        },
        ({ data }) => {
          this.$store.dispatch('signIn', data.data)
          this.$router.push({ name: 'home' })
        },
        err => {
          if (err.response.data) {
            alert(err.response.data.message)
          }
        }
      )
    }
  }
}
</script>
