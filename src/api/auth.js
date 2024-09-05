import axios from 'axios';

// 로그인 요청 함수
export async function login(email, password) {
	try {
		// email과 password를 base64로 인코딩
		const credentials = btoa(`${email}:${password}`);
		console.log('Base64 Encoded Credentials:', credentials); // 확인용 출력

		// API 요청
		const response = await axios.post(
			'http://localhost:3000/api/auth/signin',
			{},
			{
				headers: {
					Authorization: `Basic ${credentials}`,
					'Content-Type': 'application/json',
				},
			},
		);

		// 로그인 성공 시 반환된 accessToken, refreshToken 반환
		return response.data;
	} catch (error) {
		// 에러 처리
		if (error.response && error.response.status === 400) {
			throw new Error('로그인에 실패하였습니다. 존재하지 않은 회원입니다.');
		} else {
			throw new Error('로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
		}
	}
}