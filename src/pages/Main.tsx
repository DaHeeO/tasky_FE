import { useNavigate } from 'react-router-dom';

function Main() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div>
            <p>Main Page</p>
            <button onClick={handleLogout}>log out</button>
        </div>
    );
}

export default Main;
