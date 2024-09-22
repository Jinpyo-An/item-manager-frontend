<template>
	<!-- 모달 바깥 영역 클릭 시 닫히도록 설정 -->
	<div class="modal" @click.self="$emit('close')">
		<div class="modal-content">
			<div class="modal-header">
				<div class="product-info">
					<h3>{{ product.category }}</h3>
					<p>
						<strong>권장 사용 기간:</strong>
						{{ product.recommend_usage_duration }}년
					</p>
				</div>
				<img
					:src="getIconForCategory(product.category)"
					alt="device icon"
					class="device-icon"
				/>
			</div>
			<p>
				<strong>올바른 사용법</strong>
			</p>
			<p class="correct-usage">
				{{ product.correct_usage }}
			</p>
		</div>
	</div>
</template>

<script setup>
import refrigeratorIcon from '@/assets/product-icons/refrigerator.png';
import washingMachineIcon from '@/assets/product-icons/washing-machine.png';
import vacuumCleanerIcon from '@/assets/product-icons/cleaner.png';
import smartPhoneIcon from '@/assets/product-icons/smartphone.png';
import ironIcon from '@/assets/product-icons/iron.png';
import defaultDeviceIcon from '@/assets/product-icons/default.png';

const props = defineProps({
	product: Object,
});

// 아이콘 경로 반환 함수
function getIconForCategory(category) {
	const iconMap = {
		냉장고: refrigeratorIcon,
		세탁기: washingMachineIcon,
		청소기: vacuumCleanerIcon,
		휴대폰: smartPhoneIcon,
		다리미: ironIcon,
	};

	// 아이콘이 없을 경우 기본 아이콘 사용
	return iconMap[category] || defaultDeviceIcon;
}
</script>

<style scoped>
.modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	display: flex;
	align-items: center;
	justify-content: center;
}

.modal-content {
	background-color: #fff;
	padding: 20px;
	border-radius: 16px;
	margin-left: 10px;
	margin-right: 10px;
	width: 90%;
	max-width: 400px;
}

.modal-header {
	display: flex;
	align-items: center;
	margin-bottom: 20px;
}

.device-icon {
	width: 90px;
	height: 90px;
	margin-left: 70px;
	margin-top: 10px;
}

.product-info {
	display: flex;
	flex-direction: column;
}

p {
	margin: 5px 0;
}

.correct-usage {
	font-size: 14px;
	line-height: 22px;
	font-weight: 400;
	color: #9095a1ff;
}
</style>
