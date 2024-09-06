<template>
	<div class="device-card" :style="{ backgroundColor: device.color }">
		<h3>{{ device.name }}</h3>
	</div>
</template>

<script setup>
const props = defineProps({
	device: Object,
});
</script>

<style scoped>
.device-card {
	width: 100%;
	height: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 12px;
	color: white;
	font-weight: bold;
	margin-bottom: 20px;
}
</style>
