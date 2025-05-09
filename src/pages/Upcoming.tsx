import React from 'react';
import { useNavigate } from 'react-router-dom';

function Upcoming() {
    const navigate = useNavigate();
    return (
        <div>
            <p>Upcoming Page</p>
            <button onClick={() => navigate('/')}>Main</button>
        </div>
    );
}

export default Upcoming;
