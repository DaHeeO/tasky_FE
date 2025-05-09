import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserPage({ pageId }: { pageId: string }) {
    const navigate = useNavigate();
    return (
        <div>
            <p>UserPage Page, {pageId}</p>
            <button onClick={() => navigate('/')}>Main</button>
        </div>
    );
}

export default UserPage;
