<template>
  <div class="wrap" style="height: 100%; width: 100%; display: flex; flex-direction: column; align-items: center">
    <div class="logo" style="display: flex; flex-direction: column; align-items: center; padding: 65px">
      <img src="../assets/logo.png" style="height: 100px; width: 200px">
    </div>
    <div class="search" style="display: flex; flex-direction: row; align-items: center">
      <NInput v-model="search" class="searchTerm" placeholder="Digite sua busca" style="height: 45px; width: 410px; border-radius: 25px; --border: none; --border-hover: none;--border-pressed: none; --border-focus: none">
      </NInput>
      <n-button @click="()=>onClick(search)" class="searchButton" style="display: flex; flex-direction: row; align-items: center; justify-content: center; height: 45px; width: 45px; background-color: #1dbac2; --border: none; --border-hover: none;--border-pressed: none; --border-focus: none">
        <img src="../assets/magnifying_glass.png" style="height: 40px; width: 40px; margin-left: 15px; --border: none; --border-hover: none">
      </n-button>
    </div>
  </div>
</template>

<script>

import { NButton, NInput } from 'naive-ui'

export default {
  name: 'Home',
  props: {
    page: String,
    onClick: {type: Function, required: true}
  },
  data(){
    return {
      search: '',
    }
  },
  components: {
      NButton,
      NInput
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search input {
  &:focus{
    border:none !important;
  }
}
</style>
