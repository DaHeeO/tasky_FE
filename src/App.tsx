import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Today from './pages/Today';
import Upcoming from './pages/Upcoming';
import Calendar from './pages/Calendar';
import PrivateRoutes from './components/routes/PrivateRoutes';
import Login from './pages/Login';
import PublicRoute from './components/routes/PublicRoutes';
import OAuthRedirect from './pages/OAuthRedirect';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {/* 로그인 필요 없는 공개 라우트 */}
                    <Route element={<PublicRoute />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/oauth2/redirect" element={<OAuthRedirect />} />
                    </Route>
                    {/* 로그인 필요한 라우트 */}
                    <Route element={<PrivateRoutes />}>
                        <Route path="/" element={<Main />} />
                        <Route path="/today" element={<Today />} />
                        <Route path="/upcoming" element={<Upcoming />} />
                        <Route path="/calendar" element={<Calendar />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
