import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/pages/LoginPage.vue';
import SignUpPage from '@/pages/SignUpPage.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/signin',
			name: 'SignIn',
			component: LoginPage,
		},
		{
			path: '/signup',
			name: 'SignUp',
			component: SignUpPage,
		},
		{
			path: '/',
			redirect: '/signin',
		},
	],
});

export default router;
