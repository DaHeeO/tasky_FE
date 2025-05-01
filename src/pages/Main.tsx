import React from 'react';
import Header from '../components/\blayout/Header';
import { useNavigate } from 'react-router-dom';

function Main() {
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            <p>Main Page</p>
            <button onClick={() => navigate('/task')}>To Taks</button>
        </div>
    );
}

export default Main;
