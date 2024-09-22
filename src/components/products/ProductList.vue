<template>
	<div class="product-list">
		<div
			v-for="device in products"
			:key="device.id"
			class="product-item"
			@click="$emit('openModal', device)"
		>
			<img
				:src="getIconForCategory(device.category)"
				alt="device icon"
				class="device-icon"
			/>
			<span>{{ device.category }}</span>
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
	products: Array,
});

// SVG 아이콘 경로 반환 함수
function getIconForCategory(category) {
	const iconMap = {
		냉장고: refrigeratorIcon,
		세탁기: washingMachineIcon,
		청소기: vacuumCleanerIcon,
		휴대폰: smartPhoneIcon,
		다리미: ironIcon,
	};

	// 제품 아이콘이 없을 경우 기본 아이콘 사용
	return iconMap[category] || defaultDeviceIcon;
}
</script>

<style scoped>
.product-list {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 15px;
	margin: 15px;
}

.product-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
	cursor: pointer;
	border: 1px solid #ccc;
	border-radius: 8px;
}

.device-icon {
	width: 40px;
	height: 40px;
	margin-bottom: 5px;
}

span {
	font-size: 14px;
	line-height: 22px;
	font-weight: 400;
}
</style>
