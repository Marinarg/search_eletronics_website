<template>
  <div style="height:100%; width:100%">
    <Home :value="search" v-if="page=='home'" @click="onClick" @update:value="search=$event"/>
    <Results :value="search" v-if="page=='results'" @click="onClick" @update:value="search=$event" :results="results"/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Results from './components/Results.vue'
// import Analysis1 from './components/Analysis1.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Home,
    Results
  },
  data() {
    return {
      page: "home",
      results: {},
      search: ''
    }
  },
  methods: {
    async onClick(){
      const baseURI = 'http://127.0.0.1:8000/' + this.search
      
      this.page = 'results'

      try{
        const response = await axios.get(baseURI)
        console.log(response)
        this.results = response.data
    } catch(error) {console.error(error)}
    },
    async onClickAnalysis1(){
      const baseURI = 'http://127.0.0.1:8000/' + this.search

      this.page = 'anakysis1'

      try{
        const {data} = await axios.get(baseURI)
      this.results = data
    } catch(error) {console.error(error)}
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
