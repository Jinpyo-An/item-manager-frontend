<template>
	<div class="main-page">
		<Header />
		<button class="register-btn">나의 전자제품 등록하기</button>
		<div class="scroll-container">
			<ProductList :devices="devices" />
		</div>
		<FooterNavigation />
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/authStore'; // Pinia 스토어 사용
import { useRouter } from 'vue-router'; // 라우터 사용
import Header from '@/components/user-products/Header.vue';
import ProductList from '@/components/user-products/ProductList.vue';
import FooterNavigation from '@/components/user-products/FooterNavigation.vue';

// 사용자 전자제품 목록
const devices = ref([
	{ id: 1, name: '세탁기', color: '#7A8BD8FF' },
	{ id: 2, name: '냉장고', color: '#00E0A5FF' },
	{ id: 3, name: 'TV', color: '#125D95FF' },
	{ id: 4, name: '에어컨', color: '#199878FF' },
	{ id: 5, name: '청소기', color: '#7A8BD8FF' },
	{ id: 6, name: '전자레인지', color: '#00E0A5FF' },
	{ id: 7, name: '오븐', color: '#125D95FF' },
	{ id: 8, name: '블렌더', color: '#199878FF' },
]);

const authStore = useAuthStore(); // Pinia 스토어 사용
const router = useRouter();

// 페이지가 로드될 때 실행
onMounted(() => {
	// 로그인 여부 확인 및 리다이렉트
	if (!authStore.isAuthenticated) {
		alert('로그인이 필요합니다.');
		router.push('/signin');
	}

	// 뷰포트 높이 설정
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});
</script>

<style scoped>
.main-page {
	padding: 0;
	width: 100%;
	height: calc(var(--vh, 1vh) * 100);
	max-width: 390px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	overflow: hidden;
}

.register-btn {
	background-color: transparent;
	border: 1px solid #4a90e2;
	color: #4a90e2;
	border-radius: 8px;
	padding: 8px 16px;
	cursor: pointer;
	margin: 15px 0;
}

.scroll-container {
	flex-grow: 1;
	overflow-y: auto;
}

header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background-color: white;
	z-index: 1000;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 15px;
	box-shadow: 0px 4px 2px -2px gray;
	max-width: 390px;
	width: 100%;
	margin: 0;
}

footer-navigation {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: white;
	z-index: 1000;
	height: 60px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
	max-width: 390px;
	width: 100%;
	margin: 0;
}
</style>
