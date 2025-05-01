import React from 'react';
import { useNavigate } from 'react-router-dom';

function Task() {
    const navigate = useNavigate();
    return (
        <div>
            <p>Task Page</p>
            <button onClick={() => navigate('/')}>To Main</button>
        </div>
    );
}

export default Task;
