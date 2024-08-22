<template>
	<button class="submit-button">
		{{ buttonText }}
	</button>
</template>

<script setup>
defineProps({
	buttonText: {
		type: String,
		default: 'Continue',
	},
});
</script>

<style scoped>
.submit-button {
	width: 100%;
	padding: 15px;
	font-size: 16px;
	cursor: pointer;
	margin-top: 20px;
	color: #ffffffff; /* white */
	background: #5269cdff; /* primary-500 */
	opacity: 1;
	border: none;
	border-radius: 12px;
}
</style>
