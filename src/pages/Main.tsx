import React from 'react';
import { useNavigate } from 'react-router-dom';

function Main() {
    const navigate = useNavigate();
    return (
        <div>
            <p>Main Page</p>
            {/* <a href="http://localhost:8080/oauth2/authorization/google">구글 로그인</a> */}
        </div>
    );
}

export default Main;
