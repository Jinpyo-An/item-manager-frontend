<template>
	<nav class="footer-navigation">
		<button @click="goTo('home')">Home</button>
		<button @click="goTo('my-products')">내 제품</button>
		<button @click="goTo('more-devices')">사용법</button>
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
	padding: 15px;
	border-top: 1px solid #ddd;
	margin-bottom: 10px;
}

button {
	background-color: transparent;
	border: none;
	cursor: pointer;
	font-size: 15px;
}
</style>
