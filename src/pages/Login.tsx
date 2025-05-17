// src/pages/Login.tsx
function Login() {
    const handleGoogleLogin = () => {
        // oauth endpoint
        window.location.href = 'http://localhost:8080/oauth2/authorization/google';
    };

    return (
        <div>
            <h2>Google 로그인</h2>
            <button onClick={handleGoogleLogin}>Google로 로그인</button>
        </div>
    );
}

export default Login;
