<template>
	<div class="main-page">
		<Header />
		<MainTitleSelection />

		<!-- 전자제품 목록 표시 -->
		<div class="scroll-container">
			<ProductCard
				v-for="device in devices"
				:key="device.id"
				:device="device"
			/>
		</div>

		<FooterNavigation />
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useAuthStore } from '@/stores/authStore'; // Pinia 스토어 사용
import { useRouter } from 'vue-router'; // 라우터 사용
import Header from '@/components/user-products/Header.vue';
import ProductCard from '@/components/user-products/ProductCard.vue'; // 분리된 전자제품 카드 컴포넌트
import FooterNavigation from '@/components/user-products/FooterNavigation.vue';
import MainTitleSelection from '@/components/user-products/MainTitleSelection.vue';
import { fetchUserProducts } from '@/api/userProducts'; // API 요청 코드 추가

const devices = ref([]); // API에서 받아온 사용자 전자제품 목록

const authStore = useAuthStore(); // Pinia 스토어 사용
const router = useRouter();

onMounted(async () => {
	// 페이지가 로드될 때, 저장된 토큰을 불러와 인증 상태 확인
	authStore.loadTokens();

	// 로그인 여부 확인 및 리다이렉트
	if (!authStore.isAuthenticated) {
		alert('로그인이 필요합니다.');
		await router.push('/signin');
	}

	// API를 통해 사용자 전자제품 목록을 불러오기
	try {
		const accessToken = authStore.accessToken;
		devices.value = await fetchUserProducts(accessToken); // API 응답 데이터를 상태에 저장
	} catch (error) {
		console.error(error.message);
		alert('전자제품 목록을 가져오는 중 오류가 발생했습니다.');
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
span {
	text-align: right;
}

.scroll-container {
	flex-grow: 1;
	overflow-y: auto;
	display: grid;
	grid-template-columns: 1fr 1fr; /* 2열 그리드로 전자제품 카드 표시 */
	gap: 10px;
	margin-left: 15px;
	margin-right: 15px;
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
