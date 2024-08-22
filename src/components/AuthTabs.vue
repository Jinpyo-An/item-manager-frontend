<template>
	<div class="auth-tabs">
		<span
			:class="{ active: selectedTab === 'signIn' }"
			@click="selectTab('signIn')"
			>Sign in</span
		>
		<span
			:class="{ active: selectedTab === 'signUp' }"
			@click="selectTab('signUp')"
			>Sign up</span
		>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const selectedTab = ref('signIn');

function selectTab(tab) {
	selectedTab.value = tab;
}
</script>

<style scoped>
.auth-tabs {
	display: flex;
	justify-content: center;
	margin: 20px 0;
}

.auth-tabs span {
	cursor: pointer;
	padding: 10px 20px;
	font-size: 16px;
	color: #7d7d7d;
}

.auth-tabs .active {
	color: #4a90e2;
	border-bottom: 2px solid #4a90e2;
}
</style>
