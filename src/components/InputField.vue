<template>
	<div class="input-field">
		<i :class="icon"></i>
		<input :type="type" :placeholder="placeholder" />
	</div>
</template>

<script setup>
defineProps({
	type: String,
	placeholder: String,
	icon: String,
});
</script>

<style scoped>
.input-field {
	display: flex;
	align-items: center;
	border: 1px solid #ccc;
	border-radius: 8px;
	padding: 10px;
	margin: 10px 0;
}

.input-field i {
	margin-right: 10px;
}

.input-field input {
	border: none;
	outline: none;
	width: 100%;
}
</style>
