<template>
  <div>
    <h2>Welcome back!</h2>
    <button type="button" @click="handleSignout">Logout</button>
    <router-link :to="{name: 'login'}" tag="button">Login</router-link>
    <router-link :to="{name: 'register'}" tag="button">Register</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    handleSignout () {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
