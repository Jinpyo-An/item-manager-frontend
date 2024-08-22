<template>
	<div class="login-page">
		<LogoHeader />
		<AuthTabs />
		<InputField
			type="email"
			placeholder="이메일을 입력해주세요."
			icon="fas fa-envelope"
		/>
		<InputField
			type="password"
			placeholder="비밀번호를 입력해주세요."
			icon="fas fa-lock"
		/>
		<RememberMeCheckbox />
		<SubmitButton />
	</div>
</template>

<script setup>
import LogoHeader from '@/components/LogoHeader.vue';
import AuthTabs from '@/components/AuthTabs.vue';
import InputField from '@/components/InputField.vue';
import RememberMeCheckbox from '@/components/RememberMeCheckbox.vue';
import SubmitButton from '@/components/SubmitButton.vue';
</script>

<style scoped>
.login-page {
	padding: 20px;
	max-width: 400px;
	margin: auto;
}
</style>
