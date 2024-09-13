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
defineProps({
	device: Object, // 상위 컴포넌트에서 전달받은 전자제품 데이터
});

const serverUrl = 'http://localhost:3000'; // 서버 주소 설정

// 이미지 경로에 서버 주소 추가
function getImageUrl(imagePath) {
	return `${serverUrl}/${imagePath}`;
}

// "년"과 "개월" 표시를 동적으로 처리
function formatDuration(duration) {
	// '1년 8개월'에서 연, 월 추출
	const [years, months] = duration.match(/(\d+)년\s*(\d+)개월/).slice(1, 3);

	let formatted = '';

	if (years > 0) formatted += `${years}년 `;
	if (months > 0) formatted += `${months}개월`;

	return formatted.trim(); // 불필요한 공백 제거
}

// 배경 색상을 동적으로 설정하는 함수
function getBackgroundColor(device) {
	const colors = ['#7A8BD8FF', '#00E0A5FF', '#199878FF', '#125D95FF'];

	// 권장 사용 기간에 따른 배경 색상
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
	height: 100px; /* 높이를 일정하게 고정 */
	object-fit: cover; /* 이미지가 비율을 유지하며 카드 크기에 맞게 조정 */
	border-radius: 8px;
	margin-bottom: 0;
}

h3 {
	margin-top: 4px;
	margin-bottom: 3px;
}

p {
	margin: 4px 0;
}

#availablePeriod {
	margin: 4px 0; /* 각 텍스트 요소 간 간격 줄이기 */
}
</style>
