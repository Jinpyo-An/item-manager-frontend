<template>
	<div class="usage-page">
		<Header />
		<!-- 기존 Header 재사용 -->

		<div class="content">
			<SearchBar @search="handleSearch" />
			<ProductList :products="filteredProducts" @openModal="openModal" />
		</div>

		<!-- 모달 창 -->
		<UsageModal
			v-if="selectedProduct"
			:product="selectedProduct"
			@close="closeModal"
		/>

		<FooterNavigation />
		<!-- 기존 Footer 재사용 -->
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Header from '@/components/common/Header.vue'; // 기존 Header 컴포넌트
import FooterNavigation from '@/components/common/FooterNavigation.vue'; // 기존 Footer 컴포넌트
import SearchBar from '@/components/products/SearchBar.vue';
import ProductList from '@/components/products/ProductList.vue';
import UsageModal from '@/components/products/UsageModal.vue';
import { fetchProducts } from '@/api/products'; // API 요청 함수

const searchTerm = ref('');
const products = ref([]);
const filteredProducts = ref([]);
const selectedProduct = ref(null);

onMounted(async () => {
	const accessToken = localStorage.getItem('accessToken'); // 토큰 가져오기
	const data = await fetchProducts(accessToken);
	products.value = data;
	filteredProducts.value = data;
});

// 검색 핸들러
function handleSearch(term) {
	filteredProducts.value = products.value.filter(device =>
		device.category.toLowerCase().includes(term.toLowerCase()),
	);
}

// 제품 아이콘 클릭 시 모달 열기
function openModal(device) {
	selectedProduct.value = device;
}

// 모달 닫기
function closeModal() {
	selectedProduct.value = null;
}
</script>

<style scoped>
.usage-page {
	display: flex;
	flex-direction: column;
	min-height: 100vh; /* 화면 전체를 차지하도록 설정 */
}

.content {
	flex-grow: 1; /* 중간 영역이 가변적으로 늘어나도록 설정 */
	padding: 10px;
	overflow-y: auto; /* 내용이 많으면 스크롤 가능 */
}

footer-navigation {
	position: relative;
	bottom: 0;
	width: 100%;
}
</style>
