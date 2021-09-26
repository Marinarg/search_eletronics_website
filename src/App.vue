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
  text-align: center;
  height: 100%;
}

body {
  background: #1dbac2;
  height: 100vh;
}


@font-face {
  font-family: "Montserrat-Bold";
  src: local("Montserrat-Bold"),   url(./fonts/Montserrat/Montserrat-Bold.ttf) format("truetype");}

</style>
