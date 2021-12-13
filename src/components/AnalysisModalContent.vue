<template>
	<n-card>
		<div style="display: flex; flex-direction: column; align-items: flex-start; margin-right: 0px; padding: 1rem">
			<span class="product-name-text" >
				{{item.product_name}} | {{item.website_domain}}
			</span>
			<img :src="item.product_image" style="height: 100px; width: 100px;">
		</div>
	</n-card>
</template>
<script>
import {NCard} from 'naive-ui/'

export default {
	name: "AnalysisModalContent",
	components: {NCard},
	props: {
		item: {
			required: false,
			type: undefined
		}
	}
}

</script>