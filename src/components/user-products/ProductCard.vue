<template>
	<div
		class="device-card"
		:style="{ backgroundColor: getBackgroundColor(device) }"
	>
		<img
			:src="getImageUrl(device.imagePath)"
			alt="device image"
			class="device-image"
		/>
		<h3>{{ device.userProductNickname }}</h3>
		<p>권장기간: {{ device.recommendUsageDuration }}년</p>
		<p>사용기간: {{ formatDuration(device.periodUsed) }}</p>
		<p id="availablePeriod">
			{{ formatDuration(device.availablePeriod) }} 더 사용 가능
		</p>
	</div>
</template>

<script setup>
import apiClient from '@/api/apiClient';

defineProps({
	device: Object,
});

// 전달 받은 이미지 경로에 서버 주소 연결 함수
function getImageUrl(imagePath) {
	return `${apiClient.defaults.baseURL}/${imagePath}`;
}

// year, month 동적 처리
function formatDuration(duration) {
	// year, month 동적 추출
	const [years, months] = duration.match(/(\d+)년\s*(\d+)개월/).slice(1, 3);

	let formatted = '';

	if (years > 0) formatted += `${years}년 `;
	if (months > 0) formatted += `${months}개월`;

	return formatted.trim();
}

// 사용자 전자제품의 배경 색상을 동적으로 설정
function getBackgroundColor(device) {
	const colors = ['#7A8BD8FF', '#00E0A5FF', '#199878FF', '#125D95FF'];

	// 권장 사용 기간에 따른 배경 색상 동적 설정
	return colors[device.recommendUsageDuration % colors.length];
}
</script>

<style scoped>
.device-card {
	padding: 10px;
	border-radius: 8px;
	color: white;
}

.device-image {
	width: 100%;
	height: 90px;
	object-fit: cover;
	border-radius: 8px;
	margin-bottom: 0;
}

h3 {
	margin-top: 4px;
	margin-bottom: 3px;
	font-size: 15px;
}

p {
	margin: 4px 0;
	font-size: 14px;
}

#availablePeriod {
	margin: 4px 0;
}
</style>
