import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Layout from './components/\blayout/Layout';
import Today from './pages/Today';
import Upcoming from './pages/Upcoming';
import Calendar from './pages/Calendar';
import { useUserPagesStore } from './store/useUserPagesStore';
import UserPage from './pages/UserPage';

function App() {
    const { pages } = useUserPagesStore();
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Main />}></Route>
                        <Route path="/today" element={<Today />}></Route>
                        <Route path="/upcoming" element={<Upcoming />}></Route>
                        <Route path="/calendar" element={<Calendar />}></Route>
                        {pages.map((page) => (
                            <Route
                                key={page.id.toString()}
                                path={page.path}
                                element={<UserPage pageId={page.id.toString()} />}
                            />
                        ))}
                    </Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
