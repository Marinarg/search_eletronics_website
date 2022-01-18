<template>
	<n-card style="width:600px; height:400px;">
		<div style="display: flex; flex-direction: column; align-items: flex-start; padding: 1rem">
			<div class="recommendations" style="width:100%; margin-right:2rem;">
				<div class="tableHeader" style="padding-bottom: 20px;">
					<span>
						<strong>Pessoas que buscaram {{currentSearch}} também se interessaram por:</strong>
					</span>
				</div>
				<div v-if="results_recommendations && results_recommendations.length>0" style="width: 100%; margin-right:20px; display:flex; flex-direction: column" >
					<template v-for="value in results_recommendations" :key="value">
						<router-link class="item-name" style="padding: 1rem;border-radius: 8px;
															border: 1px solid #e2e2e2; margin-bottom: 5px;
															text-decoration: none; color: black !important;" 
						:to="`/?search=${value}`" target="_blank">
							<span class="product-name-text">
								{{value}}
							</span>
						</router-link>
					</template>
				</div>
				<template v-else>
					<span>Carregando...</span>
				</template>
			</div>
		</div>
	</n-card>
</template>
<script>
import {NCard} from 'naive-ui/'

export default {
	name: "AnalysisModalContent",
	components: {NCard},
	props: {
		search: String,
		page: String,
		results_recommendations: undefined,
		currentSearch: String,
	},
	data(){
		return {
			selectedItem: null,
			showModal: false,
		}
	}
}

</script>