import React from 'react';
import { useNavigate } from 'react-router-dom';

function Today() {
    const navigate = useNavigate();
    return (
        <div>
            <p>Today Page</p>
            <button onClick={() => navigate('/')}>Main</button>
        </div>
    );
}

export default Today;
