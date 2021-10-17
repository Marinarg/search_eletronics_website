import { createApp } from 'vue'
import App from './App.vue'

const uniqueId = localStorage.getItem('sessionId')

if (!uniqueId) {
	const dateNow = Date.now()
	const randomNumber = Math.floor(Math.random() * 1000)

	localStorage.setItem('sessionId', dateNow + randomNumber)}

const vue = createApp(App).mount('#app')

export default vue