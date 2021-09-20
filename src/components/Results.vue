<template>
	<div style="display: flex; flex-direction: column; align-items: start; padding: 10px; margin-left: 12px">
		<div class="header" style="display: flex; flex-direction: row; align-items: center; background-color:#1dbac2">
			<div class="logo">
				<img src="../assets/logo.png" style="height: 50px; width: 100px">
			</div>
			<div class="search" style="display: flex; flex-direction: row; align-items: center; margin-top: 12px; margin-left: 50px">
				<NInput v-model="search" class="searchTerm" placeholder="Digite uma nova busca" style="height: 30px; width: 700px; border-radius: 25px; --border: none; --border-hover: none;--border-pressed: none; --border-focus: none">
				</NInput>
				<n-button @click="()=>onClick(search)" class="searchButton" style="display: flex; flex-direction: row; align-items: center; justify-content: center; height: 45px; width: 45px; background-color: #1dbac2; --border: none; --border-hover: none; --border-pressed: none; --border-focus: none; --ripple-color:#1dbac2; --ripple-duration:0s">
					<img src="../assets/magnifying_glass.png" style="height: 30px; width: 30px; margin-left: 25px">
				</n-button>
			</div>
		</div>
		<div class="main" style="display: flex; flex-direction: column; align-items: center; background-color:#eaeaea">
			<table class="results">
				<tbody>
					
				</tbody>
			</table>
		</div>
  </div>
</template>

<script>

import { NButton, NInput } from 'naive-ui'

export default {
  name: 'Results',
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
	&:focus-visible{
		border:none !important;
	}
	&:active{
		corder:none;
	}
}
</style>
