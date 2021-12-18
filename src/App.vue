<template>
  <div style="height:100%; width:100%">
    <div v-if="isLoading" style="position: absolute; height: 100vh; width: 100vw; top: 0; left: 0; opacity: 0.6; background-color: white; z-index: 99; display: flex; align-items: center; justify-content: center;">
      <n-spin size="large" />
    </div>
    <Home :value="search" v-if="page=='home'" @click="onClick" @update:value="search=$event"/>
    <Results :value="search" :current-search="currentSearch" v-if="page=='results'" @click="onClick" @update:value="search=$event" :results="results"/>
    <AnalysisModalContent :value="search" v-if="page=='AnalysisModalContent'" @click="onClick" @update:value="search=$event" :results_recommendations="results_recommendations"/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Results from './components/Results.vue'
import axios from 'axios'
import { NSpin } from 'naive-ui'

export default {
  name: 'App',
  components: {
    Home,
    Results,
    NSpin
  },
  data() {
    return {
      page: "home",
      results: {},
      search: '',
      currentSearch:'',
      isLoading: false
    }
  },
  methods: {
    async onClick(){
      const baseURI = 'http://3.20.168.53:8000/'
      const uniqueId = localStorage.getItem('sessionId')

      this.isLoading = true
      this.page = 'results'
      this.currentSearch = this.search

      try{
        const response = await axios.get(baseURI + this.search)
        const response_recommendations = await axios.get(baseURI + this.search + '/recommendations')
        await axios.post(baseURI, {uniqueId, search: this.search})
        this.results = response.data
        this.results_recommendations = response_recommendations.data
        this.isLoading = false
    } catch(error) {
      console.error(error)
      this.isLoading = false
    }
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
