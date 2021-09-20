<template>
  <div style="height:100%; width:100%">
    <Home v-if="page=='home'" :onClick="onClick"/>
    <Results v-if="page=='results'"/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Results from './components/Results.vue'

export default {
  name: 'App',
  components: {
    Home,
    Results
  },
  data() {
    return {
      page: "home"
    }
  },
  methods: {
    onClick(search){
      console.log(search)
      this.page = 'results'
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
  color: white;
  height: 100%;
}

body {
  background: #1dbac2;
  height: 100vh;
}
</style>
