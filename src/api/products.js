import apiClient from './apiClient'; // apiClient 사용

// 전자제품 정보 가져오기
export async function fetchProducts(accessToken) {
	try {
		const response = await apiClient.get('api/products', {
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'application/json',
			},
		});
		return response.data;
	} catch (error) {
		console.error('Error fetching products:', error);
		throw new Error('전자제품 정보를 가져오는 중 오류가 발생했습니다.');
	}
}
