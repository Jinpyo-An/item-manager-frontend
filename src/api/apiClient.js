import axios from 'axios';

const apiClient = axios.create({
	baseURL: `http://${window.location.hostname}:3000`,
	headers: {
		'Content-Type': 'application/json',
	},
});

export default apiClient;
