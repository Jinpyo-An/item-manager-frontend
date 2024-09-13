import axios from 'axios';

export async function fetchUserProducts(accessToken) {
	try {
		const response = await axios.get(
			'http://localhost:3000/api/user-products',
			{
				headers: {
					Authorization: `Bearer ${accessToken}`, // 인증 토큰 설정
				},
			},
		);

		return response.data.userProductList; // 전자제품 목록 반환
	} catch (error) {
		console.error('Error fetching user products:', error);
		throw new Error('전자제품 목록을 가져오는 중 오류가 발생했습니다.');
	}
}
