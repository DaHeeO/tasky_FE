import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Task from './pages/Task';
import NotFound from './pages/NotFound';
import Layout from './components/\blayout/Layout';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Main />}></Route>
                        <Route path="/task" element={<Task />}></Route>
                    </Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
