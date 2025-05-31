import { useNavigate } from 'react-router-dom';

function Main() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <div>
            <p>Main Page</p>
            <p>{localStorage.getItem('name')}</p>
            <button onClick={handleLogout}>log out</button>
        </div>
    );
}

export default Main;
