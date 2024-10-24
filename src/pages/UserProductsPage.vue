<template>
	<div class="main-page">
		<Header />
		<MainTitleSelection />

		<!-- 전자제품 목록 -->
		<div class="scroll-container">
			<ProductCard
				v-for="device in userProducts"
				:key="device.id"
				:device="device"
			/>
		</div>

		<FooterNavigation />
	</div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';
import Header from '@/components/common/Header.vue';
import ProductCard from '@/components/user-products/UserProductList.vue';
import FooterNavigation from '@/components/common/FooterNavigation.vue';
import MainTitleSelection from '@/components/user-products/MainTitleSelection.vue';
import { getUserProducts } from '@/api/userProducts';

// 사용자 전자제품 정보 저장
const userProducts = ref([]);
const isLoading = ref(true);

const authStore = useAuthStore();
const router = useRouter();

// 뷰포트 높이 설정 함수
function setViewportHeight() {
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// 뷰포트 크기 조절 이벤트 제거
onBeforeUnmount(() => {
	window.removeEventListener('resize', setViewportHeight);
});

onMounted(async () => {
	authStore.loadTokens();

	if (!authStore.isAuthenticated) {
		alert('로그인이 필요합니다.');
		await router.push('/signin');
		return;
	}

	try {
		const accessToken = authStore.accessToken;
		userProducts.value = await getUserProducts(accessToken);
	} catch (error) {
		if (error.response && error.response.status === 401) {
			// 토큰 만료 시 처리
			authStore.clearTokens();
			alert('토큰이 만료되었습니다. 다시 로그인 해주세요.');
			await router.push('/signin');
		} else {
			console.error('Error fetching data:', error.message);
			alert('사용자 전자제품 정보를 가져오는 중 오류가 발생했습니다.');
		}
	}

	setViewportHeight();
	window.addEventListener('resize', setViewportHeight);
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

.scroll-container {
	flex-grow: 1;
	overflow-y: auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 10px;
	margin-left: 15px;
	margin-right: 15px;
	padding-bottom: 15px;
}

footer-navigation {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: white;
	z-index: 1000;
	height: 60px;
	align-items: center;
	max-width: 390px;
	width: 100%;
}

@media (max-width: 768px) {
	.scroll-container {
		gap: 8px;
	}
}
</style>
