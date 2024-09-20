// apiClient.js
import axios from 'axios';

// axios 인스턴스 생성
const apiClient = axios.create({
	baseURL: 'http://localhost:3000', // 고정된 baseURL
	headers: {
		'Content-Type': 'application/json',
	},
});

export default apiClient;
