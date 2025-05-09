import React from 'react';
import { useNavigate } from 'react-router-dom';

function Calendar() {
    const navigate = useNavigate();
    return (
        <div>
            <p>Calendar Page</p>
            <button onClick={() => navigate('/')}>Main</button>
        </div>
    );
}

export default Calendar;
