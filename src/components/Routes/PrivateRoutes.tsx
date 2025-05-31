import { Navigate } from 'react-router-dom';
import getIsLogin from '../../utils/getIsLogin';
import Layout from '../layout/Layout';
// import getIsLogin from "utils/getIsLogin";

function PrivateRoutes() {
    const isLoggedIn = getIsLogin();

    return isLoggedIn ? <Layout></Layout> : <Navigate to="/login" />;
}

export default PrivateRoutes;
