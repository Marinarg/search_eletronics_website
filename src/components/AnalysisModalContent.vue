<template>
	<n-card>
		{{JSON.stringify(item)}}
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