<template>
	<div class="header">
		<h1>나의 전자 제품</h1>
		<button class="logout" @click="handleLogout">로그아웃</button>
	</div>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore'; // Pinia 스토어 불러오기
import { useRouter } from 'vue-router'; // 라우터 사용

const authStore = useAuthStore();
const router = useRouter();

function handleLogout() {
	// 로그아웃 처리
	authStore.clearTokens();

	alert('로그아웃 되었습니다.');
	// 로그인 페이지로 리다이렉트
	router.push('/signin');
}
</script>

<style scoped>
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 0;
	padding: 0 20px 20px;
}

.header h1 {
	font-family: Arial;
}

.header .logout {
	border: 1px solid #4a90e2;
	color: #4a90e2;
}

button {
	background-color: transparent;
	border: 1px solid #ccc;
	border-radius: 8px;
	padding: 8px 12px;
	cursor: pointer;
}
</style>
