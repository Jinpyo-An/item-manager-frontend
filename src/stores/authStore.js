import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
	state: () => ({
		accessToken: null, // Access Token 저장
		refreshToken: null, // Refresh Token 저장
		isAuthenticated: false, // 로그인 상태를 저장
	}),
	actions: {
		// 로그인 시 토큰 저장
		setTokens(accessToken, refreshToken) {
			this.accessToken = accessToken;
			this.refreshToken = refreshToken;
			this.isAuthenticated = true;
		},

		// 로그아웃 시 토큰 삭제
		clearTokens() {
			this.accessToken = null;
			this.refreshToken = null;
			this.isAuthenticated = false;
		},

		// 토큰 불러오기
		loadTokens() {
			this.isAuthenticated = !!(this.accessToken && this.refreshToken);
		},
	},
});
