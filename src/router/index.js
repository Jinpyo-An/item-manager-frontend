import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';
import LoginPage from '@/pages/LoginPage.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: App,
		},
		{
			path: '/signin',
			name: 'login',
			component: LoginPage,
		},
	],
});

export default router;
