import apiClient from './apiClient';

// 사용자 전자제품 정보 요청 API 함수
export async function getUserProducts(accessToken) {
	try {
		const response = await apiClient.get('api/user-products', {
			headers: {
				Authorization: `Bearer ${accessToken}`, // 인증 토큰
			},
		});

		return response.data.userProductList; // 사용자 전자제품 정보 목록 반환
	} catch (error) {
		console.error('Error fetching user products:', error);
		throw new Error('전자제품 목록을 가져오는 중 오류가 발생했습니다.');
	}
}
