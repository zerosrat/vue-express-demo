<template>
  <div>
    <form>
      <input v-model="name" type="text" placeholder="username">
      <input v-model="password" type="password" placeholder="password">
      <button class="button" type="submit" @click.prevent="handleRegister">Sign up</button>
    </form>
  </div>
</template>

<script>
import userAPI from '@/api/user'

export default {
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    handleRegister () {
      userAPI.signUp(
        {
          name: this.name,
          password: this.password
        },
        ({status}) => {
          if (status === 201) {
            alert('Sign up successfully')
          }
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
