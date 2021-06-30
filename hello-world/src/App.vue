<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" active-class=''>Home</router-link> |
      <router-link to="/about">About</router-link>
      <span @click="goPhoto">Photo</span>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    goPhoto () {
      console.log(this.$router, 'router')
      // this.$router.push('/photo')
      this.$router.push({ name: 'Photo', params: { id: 2 }, query: { query2: 3 } })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
