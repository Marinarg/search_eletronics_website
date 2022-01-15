<template>
	<n-card style="width:600px; height:400px;">
		<div style="display: flex; flex-direction: column; align-items: flex-start; margin-right: 0px; padding: 1rem">
			<table class="recommendations">
					<thead class="tableHeader">
						<span>
							Pessoas que buscaram esse produto também se interessaram por:
						</span>
					</thead>
					<tbody>
						<template v-for="value in results_recommendations">
							<tr class="row" data-index=1 style="background-color: white">
								<td class="item-name">
									<div style="display: flex; flex-direction: column; align-items: flex-start; margin-right: 0px; padding: 1rem">
										<span class="product-name-text" >
											{{value}}
										</span>
									</div>
								</td>
							</tr>
						</template>
					</tbody>
				</table>
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