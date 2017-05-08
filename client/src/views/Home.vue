<template>
  <div>
    <h2 v-if="!userToken">Please sign in or sign up</h2>
    <h2 v-else>Welcome back, {{userInfo.name}}!</h2>
    <button class="button" v-if="userToken" type="button" @click="handleSignOut">Sign out</button>
    <router-link class="button" v-if="userToken" :to="{name: 'todo'}" tag="button">Todo page</router-link>
    <router-link class="button" v-if="!userToken" :to="{name: 'signin'}" tag="button">Sign in</router-link>
    <router-link class="button" v-if="!userToken" :to="{name: 'signup'}" tag="button">Sign up</router-link>
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
      'userInfo',
      'userToken'
    ])
  }
}
</script>
