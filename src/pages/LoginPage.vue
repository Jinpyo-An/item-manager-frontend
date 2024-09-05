<template>
	<div class="login-page">
		<LogoHeader />
		<AuthTabs />
		<InputField
			v-model="email"
			type="email"
			placeholder="이메일을 입력해주세요."
			label="Email"
		/>
		<InputField
			v-model="password"
			type="password"
			placeholder="비밀번호를 입력해주세요."
			label="Password"
		/>
		<RememberMeCheckbox />
		<SubmitButton :loading="loading" @click="handleLogin" />
		<div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { login } from '@/api/auth'; // 분리된 login 함수 불러오기
import LogoHeader from '@/components/LogoHeader.vue';
import AuthTabs from '@/components/AuthTabs.vue';
import InputField from '@/components/InputField.vue';
import RememberMeCheckbox from '@/components/RememberMeCheckbox.vue';
import SubmitButton from '@/components/SubmitButton.vue';

const email = ref('');
const password = ref('');
const loading = ref(false);
const errorMessage = ref('');

async function handleLogin() {
	errorMessage.value = ''; // 기존 에러 메시지 초기화
	loading.value = true;

	try {
		// login 함수를 호출하여 로그인 요청
		const data = await login(email.value, password.value);

		// 로그인 성공 시 accessToken과 refreshToken을 localStorage에 저장
		if (data.accessToken && data.refreshToken) {
			localStorage.setItem('accessToken', data.accessToken);
			localStorage.setItem('refreshToken', data.refreshToken);
			alert('로그인에 성공하였습니다.');

			// 필요 시, 로그인 후 리다이렉트
			// router.push('/dashboard'); (예시)
		}
	} catch (error) {
		// 에러 처리
		errorMessage.value = error.message;
	} finally {
		loading.value = false;
	}
}
</script>

<style scoped>
.login-page {
	padding: 20px;
	max-width: 400px;
	margin: auto;
}

.error-message {
	color: red;
	margin-top: 10px;
}
</style>
