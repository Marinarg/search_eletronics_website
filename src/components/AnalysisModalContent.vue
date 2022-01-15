<template>
	<n-card style="width:600px; height:400px;">
		<div style="display: flex; flex-direction: column; align-items: flex-start; margin-right: 0px; padding: 1rem">
			<table class="recommendations">
					<thead class="tableHeader" style="margin-bottom: 5px">
						<span>
							<strong>Pessoas que buscaram esse produto também se interessaram por:</strong>
						</span>
					</thead>
					<tbody>
						<template v-for="value in results_recommendations">
							<tr class="row">
								<td class="item-name">
									<span class="product-name-text" >
										- {{value}}
									</span>
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