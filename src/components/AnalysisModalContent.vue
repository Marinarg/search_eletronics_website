<template>
	<n-card style="width:600px; height:400px;">
		<div style="display: flex; flex-direction: column; align-items: flex-start; margin-right: 0px; padding: 1rem">
			<span class="recommendations" >
				{{results_recommendations}}
			</span>
		</div>
	</n-card>
</template>
<script>
import {NCard} from 'naive-ui/'

export default {
	name: "AnalysisModalContent",
	components: {NCard},
	props: {
		value: String,
		page: String,
		onClick: {type: Function, required: true},
		results_recommendations: undefined,
	},
  
	data(){
	return {
		search: this.value,
		selectedItem: null,
		showModal: false,
	}
	}
}

</script>