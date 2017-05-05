<template>
  <div>
    <h2 v-if="!userInfo.id">Please sign in or sign up</h2>
    <h2 v-else>Welcome back, {{userInfo.name}}!</h2>
    <button v-if="userInfo.id" type="button" @click="handleSignOut">Sign out</button>
    <router-link v-if="!userInfo.id" :to="{name: 'signin'}" tag="button">Sign in</router-link>
    <router-link v-if="!userInfo.id" :to="{name: 'signup'}" tag="button">Sign up</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  methods: {
    handleSignOut () {
      this.$store.dispatch('signOut')
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  }
}
</script>
