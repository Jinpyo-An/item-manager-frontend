<template>
	<div class="product-list">
		<DeviceCard v-for="device in devices" :key="device.id" :device="device" />
	</div>
</template>

<script setup>
import DeviceCard from './DeviceCard.vue';

const props = defineProps({
	devices: Array, // 백엔드에서 받아온 전자제품 리스트
});
</script>

<style scoped>
.product-list {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 20px;
	padding: 20px;
}
</style>
