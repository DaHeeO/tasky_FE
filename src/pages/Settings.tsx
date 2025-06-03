import React from 'react';
import { useNavigate } from 'react-router-dom';

function Settings() {
    const navigate = useNavigate();
    return (
        <div>
            <p>Setting Page</p>
            <button onClick={() => navigate('/')}>Main</button>
        </div>
    );
}

export default Settings;
