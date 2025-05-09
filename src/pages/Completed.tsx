import React from 'react';
import { useNavigate } from 'react-router-dom';

function Completed() {
    const navigate = useNavigate();
    return (
        <div>
            <p>Completed Page</p>
            <button onClick={() => navigate('/')}>Main</button>
        </div>
    );
}

export default Completed;
