// apiClient.js
import axios from 'axios';

// axios 인스턴스 생성
const apiClient = axios.create({
	baseURL: 'http://192.168.0.9:3000', // 고정된 baseURL
	headers: {
		'Content-Type': 'application/json',
	},
});

export default apiClient;
