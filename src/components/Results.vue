<template>
	<div class="wrap" style="display: flex; flex-direction: column; height: 100%; width: 100%;">
		<div class="main-header" style="height: 12%; width: 100%; display: flex; flex-direction: column; align-items: flex-start; background-color:#1dbac2;">
			<div class="header" style="display: flex; flex-direction: row; align-items: center; vertical-align: middle; margin-left: 12px; margin-top: 1%">
				<div class="logo">
					<img src="../assets/logo.png" style="height: 50px; width: 100px">
				</div>
				<div class="search" style="display: flex; flex-direction: row; align-items: center; margin-top: 1%; margin-left: 50%">
					<NInput v-on:keypress.enter="handleButton" v-model="search" class="searchTerm" placeholder="Digite uma nova busca" style="height: 40px; width: 700px; border-radius: 25px; --border: none; --border-hover: none;--border-pressed: none; --border-focus: none" @input="handleInput">
					</NInput>
					<n-button @click="handleButton" class="search-button" style="display: flex; flex-direction: row; align-items: center; justify-content: center; height: 45px; width: 45px; background-color: #1dbac2; --border: none; --border-hover: none; --border-pressed: none; --border-focus: none; --ripple-color:#1dbac2; --ripple-duration:0s; --n-border: none; --n-border-hover: none">
						<img src="../assets/magnifying_glass.png" style="height: 35px; width: 35px; margin-left: 25px; --n-border: none; ; --n-border-hover: none">
					</n-button>
					<router-link :to="`/?search=${search}`" style="display: none" ref="routerLink"/>
				</div>
			</div>
		</div>
		<div style="width: 100%; display: flex; flex-direction: column; align-items: center; background-color:#eaeaea; margin-top: 2%;">
			<div class="qtt-products-found" style="font-size: 15px; color:#716c6c; display: flex; flex-direction: column; align-items: center;">
				<span class="products-text" style="margin-bottom: 5px">
					{{currentSearch}} - {{Object.keys(results).length}} produtos encontrados
				</span>
				<n-button class="products-button" style="display: flex; flex-direction: row; align-items: center; justify-content: center; height: 35px; width: 180px; background-color: #FF607D; --border: none; --border-hover: none; --border-pressed: none; --border-focus: none; --ripple-color:#FF607D; --ripple-duration:0s; border-radius: 13px; --color-pressed: #0000; cursor: pointer" 
							@click="()=>selectItem(value)">
					<span class="products-button-text" style="font-size: 12px">
						produtos relacionados
					</span>
				</n-button>
			</div>
			<div class="main-table" style="display: flex; flex-direction: column; align-items: center; background-color:#eaeaea">
				<table class="results" cellspacing="5px" style="border-collapse: separate; border-spacing: 0 20px">
					<thead class="tableHeader">
					</thead>
					<tbody>
						<template v-for="(value, index) in results" v-bind:key="index">
							<tr class="odd-row" data-index=1 style="background-color: white">
								<td class="product-name">
									<div style="display: flex; flex-direction: column; align-items: flex-start; margin-right: 0px; padding: 1rem">
										<span class="product-name-text" >
											{{value.product_name}} | {{value.website_domain}}
										</span>
										<img :src="value.product_image" style="height: 100px; width: 100px;">
									</div>
								</td>
								<td class="product-price">
									<div v-if="value.in_stock === 'True'" style="display: flex; flex-direction: column;align-items: flex-start; margin-right: 54px;">
										<span class="product-price-text">
											Preço
										</span>
										<span class="product-price-value">
											{{value.currency_symbol}} {{value.product_price}}
										</span>
									</div>
								</td>
								<td class="product-shipping">
									<div v-if="value.in_stock === 'True'">
										<div v-if="value.shipping_info" style="display: flex; flex-direction: column; align-items: center; margin-right: 54px;">
											<span class="product-shipping-head">
													Frete
											</span>
											<div class="product-shipping-text-and-value" style="display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 30px">
												<template v-for="(v, i) in value.shipping_info" v-bind:key="i">
													<span class="product-shipping-types">
														{{v.deadline}}: {{v.price}}
													</span>
												</template>
											</div>
											<span class="product-shipping-info">
												*Valor referente à localização da UFSC.
											</span>
										</div>
									</div>

								</td>
								<td class="product-in-stock">
									<div v-if="value.in_stock === 'True'" style="margin-right: 54px">
										<span class="product-name-text">
											Disponível em estoque
										</span>
									</div>
									<div v-else class="product-not-in-stock" style="margin-right: 54px">
									<span class="product-name-text">
										Indisponível
									</span>
								</div>
								</td>
								<td class="go-to-site">
									<a :href="value.product_url" target="_blank" style="text-decoration: none">
										<n-button class="go-to-site-button" style="display: flex; flex-direction: row; align-items: center; justify-content: center; height: 45px; width: 80px; margin-right:25px; background-color: #FF607D; --border: none; --border-hover: none; --border-pressed: none; --border-focus: none; --ripple-color:#FF607D; --ripple-duration:0s; border-radius: 13px">
											<span class="go-to-site-button-text">
												Ir ao site
											</span>
										</n-button>
									</a>
								</td>
							</tr>
						</template>
					</tbody>
				</table>
			</div>
		</div>
		<n-modal v-model:show="showModal">
			<analysis-modal-content :results_recommendations="results_recommendations" :currentSearch="value"/>
		</n-modal>
	</div>
</template>

<script>
import { NButton, NInput, NModal } from 'naive-ui'
import AnalysisModalContent from './AnalysisModalContent'
import axios from 'axios'

export default {
	name: 'Results',
	props: {
		value: String,
		page: String,
		onClick: {type: Function, required: true},
		results: undefined,
		currentSearch: String,
	},
	data(){
	return {
		search: this.value,
		selectedItem: null,
		showModal: false,
		results_recommendations: null
	}},
	components: {
		NButton,
		NInput,
		NModal,
		AnalysisModalContent
	},
	methods: {
		handleButton(){
			window.location.href = `/?search=${this.search}`
		},
		handleInput(val){
			
			this.search = val;
			this.$emit('update:value', val)
		},
		async selectItem(item){
			try{

			const baseURI = 'http://3.20.168.53:8000/'

			this.showModal = true
			const {data} = await axios.get(baseURI + this.value + '/recommendations')
			this.results_recommendations = data
			this.selectedItem = item

			} catch(error){
				console.error(error)
			}
		}
	}
}
</script>

<style scoped>

.wrap{
    font-family: "Montserrat-Bold";
    font-size: 14px;
    background-color: #eaeaea;
}

.main-info{
    font-size: 20px;
    &:hover{
       color: red !important;
    }
    &:active{
       color: red !important;
    }
    button {
       color: purple !important;
    }
}

.products-button:hover {
	color: black !important;
	background-color: #FF607D !important;
}

.products-button:focus {
	color: black !important;
	background-color: #FF607D !important;
}

.analysis1-button:hover {
	color: black !important;
	background-color: #FF607D !important;
}

.analysis1-button:focus {
	color: black !important;
	background-color: #FF607D !important;
}

.analysis2-button:hover {
	color: black !important;
	background-color: #FF607D !important;
}

.analysis2-button:focus {
	color: black !important;
	background-color: #FF607D !important;
}

.product-price{
    font-size: 10px;
}

.product-shipping{
    font-size: 10px;
}

.product-shipping-text-and-value{
    margin-bottom: 5px;
}

.product-shipping-head{
    width: 105px;
    margin-bottom: 10px;
}

.product-shipping-info{
    font-size: 8px;
    color: #494949;
    width: 105px;
}
 
.product-in-stock{
    font-size: 10px;
}

.product-not-in-stock{
    font-size: 10px;
    color: #FC0619;
}

.go-to-site-button:hover {
	color: black !important;
	background-color: #EFB6C2 !important;
}

.search input {
	&:focus-visible{
		border:none !important;
	}
	&:active{
		corder:none;
	}
}

</style>
