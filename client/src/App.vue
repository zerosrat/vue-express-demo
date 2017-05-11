<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png" @click="$router.push('/')">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  background-color: #fff !important;
  font-weight: 400!important;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  cursor: pointer;
}

.button {
  padding: 5px 10px;
  border: 1px solid #4fc08d;
  border-radius: 1em;
  background-color: #fff;
  color: #42b983;
  cursor: pointer;
}
</style>
