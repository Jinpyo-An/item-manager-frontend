import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/pages/LoginPage.vue';
import SignUpPage from '@/pages/SignUpPage.vue';
import MainPage from '@/pages/MainPage.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		// {
		// 	path: '/signin',
		// 	name: 'SignIn',
		// 	component: LoginPage,
		// },
		// {
		// 	path: '/signup',
		// 	name: 'SignUp',
		// 	component: SignUpPage,
		// },
		// {
		// 	path: '/',
		// 	redirect: '/signin',
		// },
		// {
		// 	path: '/main',
		// 	name: 'Main',
		// 	component: MainPage,
		// },
		{
			path: '/',
			name: 'Main',
			component: MainPage,
		},
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
	],
});

export default router;
