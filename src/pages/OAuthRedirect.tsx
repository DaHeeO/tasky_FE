import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function OAuthRedirect() {
    // backend에서 로그인 로직 처리하기 위해
    // "http://localhost:3000/oauth2/redirect?token=%s&name=%s&image=%s",
    // 으로 token 전달 여기서 localstrage에 토큰 정보 저장
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');
        const name = params.get('name');
        const image = params.get('image');

        if (token) {
            localStorage.setItem('token', token);
            if (name) localStorage.setItem('name', name);
            if (image) localStorage.setItem('image', image);
            navigate('/');
        } else {
            alert('로그인에 실패했습니다.');
            navigate('/login');
        }
    }, [location, navigate]);

    return <div>로그인 중입니다...</div>;
}

export default OAuthRedirect;
