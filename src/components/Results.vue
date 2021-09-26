<template>
	<div class="wrap" style="display: flex; flex-direction: column; height: 100%; width: 100%;">
		<div class="main-header" style="height: 12%; width: 100%; display: flex; flex-direction: column; align-items: flex-start; background-color:#1dbac2;">
			<div class="header" style="display: flex; flex-direction: row; align-items: center; vertical-align: middle; margin-left: 12px; margin-top: 1%">
				<div class="logo">
					<img src="../assets/logo.png" style="height: 50px; width: 100px">
				</div>
				<div class="search" style="display: flex; flex-direction: row; align-items: center; margin-top: 1%; margin-left: 25%">
					<NInput v-model="search" class="searchTerm" placeholder="Digite uma nova busca" style="height: 40px; width: 700px; border-radius: 25px; --border: none; --border-hover: none;--border-pressed: none; --border-focus: none">
					</NInput>
					<n-button @click="()=>onClick(search)" class="search-button" style="display: flex; flex-direction: row; align-items: center; justify-content: center; height: 45px; width: 45px; background-color: #1dbac2; --border: none; --border-hover: none; --border-pressed: none; --border-focus: none; --ripple-color:#1dbac2; --ripple-duration:0s">
						<img src="../assets/magnifying_glass.png" style="height: 35px; width: 35px; margin-left: 25px">
					</n-button>
				</div>
			</div>
		</div>
		<div style="height: 88%; width: 100%; display: flex; flex-direction: column; align-items: center; background-color:#eaeaea; margin-top: 5%;">
			<div class="main-boxes" style="display: flex; flex-direction: row; align-items: center; background-color:#eaeaea;">
				<n-button class="products-button" style="display: flex; flex-direction: row; align-items: center; justify-content: center; height: 65px; width: 220px; margin-right:30px; background-color: #EFB6C2; --border: none; --border-hover: none; --border-pressed: none; --border-focus: none; --ripple-color:#EFB6C2; --ripple-duration:0s; border-radius: 13px; --color-pressed: #0000">
					<span class="products-button-text">
						PRODUTOS ENCONTRADOS
					</span>
				</n-button>
				<n-button class="analysis1-button" style="display: flex; flex-direction: row; align-items: center; justify-content: center; height: 65px; width: 220px; margin-right:30px; background-color: #EFB6C2; --border: none; --border-hover: none; --border-pressed: none; --border-focus: none; --ripple-color:#EFB6C2; --ripple-duration:0s; border-radius: 13px">
					<span class="analysis1-button-text">
						ANÁLISE 1
					</span>
				</n-button>
				<n-button class="analysis2-button" style="display: flex; flex-direction: row; align-items: center; justify-content: center; height: 65px; width: 220px; margin-right:30px; background-color: #EFB6C2; --border: none; --border-hover: none; --border-pressed: none; --border-focus: none; --ripple-color:#EFB6C2; --ripple-duration:0s; border-radius: 13px">
					<span class="analysis2-button-text">
						ANÁLISE 2
					</span>
				</n-button>
			</div>
			<div class="main-table" style="display: flex; flex-direction: column; align-items: center; background-color:#eaeaea">
				<table class="results" cellspacing="5px" style="border-collapse: separate; border-spacing: 0 20px">
					<thead class="tableHeader">
					</thead>
					<tbody>
						<tr class="odd-row" data-index=1 style="background-color: white;">
							<td class="product-name">
								<div style="display: flex; flex-direction: column; align-items: flex-start; margin-right: 54px">
									<span class="product-name-text" >
										Nome produto | Site1
									</span>
									<img src="../assets/red_led.png" style="height: 100px; width: 100px;">
								</div>
							</td>
							<td class="product-shipping">
								<div style="display: flex; flex-direction: column; align-items: center; margin-right: 54px;">
									<div class="product-shipping-text-and-value" style="display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 30px">
										<span class="product-shipping-text">
											Frete.
										</span>
										<span class="product-shipping-vaue">
											R$ 0,00.
										</span>
									</div>
									<span class="product-shipping-info">
										*Valor referente à localização da UFSC.
									</span>
								</div>

							</td>
							<td class="product-price">
								<div style="display: flex; flex-direction: column;align-items: flex-start; margin-right: 54px;">
									<span class="product-price-text">
										Preço
									</span>
									<span class="product-price-value">
										R$ 0,00
									</span>
								</div>
							</td>
							<td class="product-in-stock">
								<div style="margin-right: 54px">
									<span class="product-name-text">
										Disponível em estoque
									</span>
								</div>
							</td>
							<td class="go-to-site">
								<n-button class="go-to-site-button" style="display: flex; flex-direction: row; align-items: center; justify-content: center; height: 45px; width: 80px; margin-right:25px; background-color: #FF607D; --border: none; --border-hover: none; --border-pressed: none; --border-focus: none; --ripple-color:#FF607D; --ripple-duration:0s; border-radius: 13px">
									<span class="go-to-site-button-text">
										Ir ao site
									</span>
								</n-button>
							</td>
						</tr>
						<tr class="even-row" data-index=2 style="background-color: white;">
							<td class="product-name">
								<div style="display: flex; flex-direction: column; align-items: flex-start; margin-right: 54px">
									<span class="product-name-text" >
										Nome produto | Site1
									</span>
									<img src="../assets/red_led.png" style="height: 100px; width: 100px;">
								</div>
							</td>
							<td class="product-shipping">
								<div style="display: flex; flex-direction: column; align-items: center; margin-right: 54px;">
									<div class="product-shipping-text-and-value" style="display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 30px">
										<span class="product-shipping-text">
											
										</span>
										<span class="product-shipping-vaue">
											
										</span>
									</div>
									<span class="product-shipping-info">
										
									</span>
								</div>

							</td>
							<td class="product-price">
								<div style="display: flex; flex-direction: column;align-items: flex-start; margin-right: 54px;">
									<span class="product-price-text">
										Preço
									</span>
									<span class="product-price-value">
										R$ 0,00
									</span>
								</div>
							</td>
							<td class="product-not-in-stock">
								<div style="margin-right: 54px">
									<span class="product-name-text">
										Indisponível
									</span>
								</div>
							</td>
							<td class="go-to-site">
								<n-button class="go-to-site-button" style="display: flex; flex-direction: row; align-items: center; justify-content: center; height: 45px; width: 80px; margin-right:25px; background-color: #FF607D; --border: none; --border-hover: none; --border-pressed: none; --border-focus: none; --ripple-color:#FF607D; --ripple-duration:0s; border-radius: 13px">
									<span class="go-to-site-button-text">
										Ir ao site
									</span>
								</n-button>
							</td>						
						</tr>
					</tbody>
				</table>
			</div>
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

.wrap{
    font-family: "Montserrat-Bold";
    font-size: 14px;
    background-color: #eaeaea;
}

.main-boxes{
    font-size: 14px;
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

.search input {
	&:focus-visible{
		border:none !important;
	}
	&:active{
		corder:none;
	}
}

</style>
