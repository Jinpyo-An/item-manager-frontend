<template>
	<div class="main-title-section">
		<div class="left-section">
			<div class="date-info">
				<i class="sun-icon"
					><font-awesome-icon :icon="['fas', 'calendar-days']"
				/></i>
				<span class="date">{{ formattedDate }}</span>
			</div>
			<h1>나의 전자 제품</h1>
		</div>
		<!-- 등록하기 버튼 -->
		<button class="register-btn">
			<font-awesome-icon :icon="['fas', 'pen']" class="icon" />등록하기
		</button>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 현재 날짜를 저장할 변수
const formattedDate = ref('');

// 현재 날짜를 포맷팅하는 함수
function formatDate(date) {
	const options = { weekday: 'short', day: 'numeric', month: 'short' };
	return date.toLocaleDateString('en-US', options).toUpperCase(); // 예시: "FRI, SEP 13"
}

// 페이지가 로드될 때 실행되는 함수
onMounted(() => {
	const now = new Date();
	formattedDate.value = formatDate(now);
});
</script>

<style scoped>
.main-title-section {
	display: flex;
	justify-content: space-between; /* 왼쪽 섹션과 버튼을 양 끝으로 배치 */
	align-items: center; /* 모든 요소를 세로로 중앙에 정렬 */
	padding: 5px 5px 5px;
	margin: 10px 0;
	margin-left: 10px;
	margin-right: 10px;
}

.left-section {
	display: flex;
	flex-direction: column; /* 날짜와 타이틀을 세로로 배치 */
}

.date-info {
	display: flex;
	align-items: center;
	font-size: 1rem;
	font-family: Manrope, serif;
	color: #666;
	margin-bottom: 10px; /* 날짜와 타이틀 사이 간격 */
}

.sun-icon {
	font-size: 1.2rem;
	margin-right: 8px;
}

h1 {
	font-size: 2rem;
	font-weight: bold;
	margin: 0;
}

.register-btn {
	background-color: transparent;
	border: 1px solid #5269cdff;
	padding: 10px 15px;
	margin-top: 20px;
	font-size: 1rem;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 20px;
	font-weight: 400;
	color: #5269cdff; /* primary-500 */
	opacity: 1;
	border-radius: 16px;
}

.register-btn .icon {
	margin-right: 6px; /* 아이콘과 텍스트 간의 간격 */
}
</style>
