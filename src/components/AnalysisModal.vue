<template>
	<n-modal v-model:show="showModal">
		<n-card>
			{{JSON.stringify(item)}}
		</n-card>
	</n-modal>
</template>
<script>
import {NModal, NCard} from 'naive-ui/'

export default {
	name: "AnalysisModal",
	components: {NModal,NCard},
	props: {
		showModal: {
			required: true,
			type: Boolean,
		},
		item: {
			required: false,
			type: undefined
		}
	}
}

</script>