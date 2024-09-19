<template>
	<nav class="footer-navigation">
		<!-- Home 버튼 -->
		<button @click="goTo('home')" class="nav-item">
			<font-awesome-icon :icon="['fas', 'house']" class="nav-icon" />
			<span>Home</span>
		</button>

		<!-- 내 제품 버튼 -->
		<button @click="goTo('my-products')" class="nav-item">
			<font-awesome-icon :icon="['fas', 'user']" class="nav-icon" />
			<span>내 제품</span>
		</button>

		<!-- 사용법 버튼 -->
		<button @click="goTo('more-devices')" class="nav-item">
			<font-awesome-icon :icon="['fasr', 'share-nodes']" class="nav-icon" />
			<span>사용법</span>
		</button>
	</nav>
</template>

<script setup>
function goTo(page) {
	// 라우터 이동 로직
	console.log(`${page} 페이지로 이동`);
}
</script>

<style scoped>
.footer-navigation {
	display: flex;
	justify-content: space-around;
	padding: 8px;
	margin-bottom: 5px;
	border-radius: 16px 16px 0 0;
	box-shadow: 0 -5px 5px -5px #333;
}

.nav-item {
	display: flex;
	flex-direction: column; /* 아이콘과 텍스트를 세로로 배치 */
	align-items: center;
	background-color: transparent;
	border: none;
	cursor: pointer;
	font-size: 11px;
	line-height: 16px;
	font-weight: 400;
	opacity: 1;
}

.nav-icon {
	width: 24px;
	height: 24px;
	fill: currentColor;
}
</style>
