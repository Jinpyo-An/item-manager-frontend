<template>
	<div class="usage-page">
		<Header />
		<div class="content">
			<SearchBar @search="handleSearch" />
			<ProductList :products="filteredProducts" @openModal="openModal" />
		</div>

		<UsageModal
			v-if="selectedProduct"
			:product="selectedProduct"
			@close="closeModal"
		/>

		<FooterNavigation />
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Header from '@/components/common/Header.vue';
import FooterNavigation from '@/components/common/FooterNavigation.vue';
import SearchBar from '@/components/products/SearchBar.vue';
import ProductList from '@/components/products/ProductList.vue';
import UsageModal from '@/components/products/UsageModal.vue';
import { getProducts } from '@/api/products';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';

const products = ref([]);
const filteredProducts = ref([]);
const selectedProduct = ref(null);

const authStore = useAuthStore();
const router = useRouter();

onMounted(async () => {
	await checkAuthentication(); // 인증 상태 확인

	try {
		const accessToken = authStore.accessToken;
		const data = await getProducts(accessToken);
		products.value = data;
		filteredProducts.value = data;
	} catch (error) {
		console.error('Error fetching products:', error.message);
		alert('전자제품 정보를 가져오는 중 오류가 발생했습니다.');
	}

	setViewportHeight();
	window.addEventListener('resize', setViewportHeight);
});

// 인증 상태 확인 함수
async function checkAuthentication() {
	authStore.loadTokens();

	if (!authStore.isAuthenticated) {
		alert('로그인이 필요합니다.');
		await router.push('/signin');
	}
}

// 검색 핸들러
function handleSearch(term) {
	filteredProducts.value = products.value.filter(device =>
		device.category.toLowerCase().includes(term.toLowerCase()),
	);
}

// 모달 열기
function openModal(device) {
	selectedProduct.value = device;
}

// 모달 닫기
function closeModal() {
	selectedProduct.value = null;
}

// 뷰포트 높이 설정 함수
function setViewportHeight() {
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}
</script>

<style scoped>
.usage-page {
	padding: 0;
	width: 100%;
	height: calc(var(--vh, 1vh) * 100);
	max-width: 390px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	overflow: hidden;
}

.content {
	flex-grow: 1;
	padding: 10px;
	overflow-y: auto;
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
	box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
	max-width: 390px;
	width: 100%;
	margin: 0;
}
</style>
