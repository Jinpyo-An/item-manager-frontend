import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
	state: () => ({
		accessToken: null, // Access Token 저장
		refreshToken: null, // Refresh Token 저장
		isAuthenticated: false, // 로그인 상태를 저장
	}),
	actions: {
		// 로그인 시 토큰을 저장하는 액션
		setTokens(accessToken, refreshToken) {
			this.accessToken = accessToken;
			this.refreshToken = refreshToken;
			this.isAuthenticated = true;

			// LocalStorage에도 저장 (선택 사항)
			localStorage.setItem('accessToken', accessToken);
			localStorage.setItem('refreshToken', refreshToken);
		},

		// 로그아웃 시 토큰을 삭제하는 액션
		clearTokens() {
			this.accessToken = null;
			this.refreshToken = null;
			this.isAuthenticated = false;

			// LocalStorage에서 토큰 삭제
			localStorage.removeItem('accessToken');
			localStorage.removeItem('refreshToken');
		},

		// 저장된 토큰을 불러오는 액션
		loadTokens() {
			const accessToken = localStorage.getItem('accessToken');
			const refreshToken = localStorage.getItem('refreshToken');
			if (accessToken && refreshToken) {
				this.setTokens(accessToken, refreshToken);
			}
		},
	},
});
