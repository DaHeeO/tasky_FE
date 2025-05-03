import React from 'react';
import { useNavigate } from 'react-router-dom';

function Main() {
    const navigate = useNavigate();
    return (
        <div>
            <p>Main Page</p>
            <button onClick={() => navigate('/task')}>To Taks</button>
        </div>
    );
}

export default Main;
