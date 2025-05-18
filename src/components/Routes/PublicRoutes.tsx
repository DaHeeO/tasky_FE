import { Navigate } from 'react-router';
import { Outlet } from 'react-router-dom';
import getIsLogin from '../../utils/getIsLogin';

function PublicRoute() {
    const isLoggedIn = getIsLogin();

    return isLoggedIn ? <Navigate to="/login" replace /> : <Outlet />;
}

export default PublicRoute;
