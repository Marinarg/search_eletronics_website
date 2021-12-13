<template>
	<n-modal v-model:show="showModal" @close="(value)=>$emit('update:showModal', value)" 
		@keyup.escape="$emit('update:showModal', false)">
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