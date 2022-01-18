import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import root from './index.vue';

const uniqueId = localStorage.getItem('sessionId')

if (!uniqueId) {
	const dateNow = Date.now()
	const randomNumber = Math.floor(Math.random() * 1000)

	localStorage.setItem('sessionId', dateNow + randomNumber)
}

const routes = [{
	path: "/", component: App,
}]

const router = createRouter({
	routes,
	history: createWebHistory(),
})

router.beforeEach((to, from, next)=>{
	next();
})

const app = createApp(root)
app.use(router)
app.mount('#app')

export default app