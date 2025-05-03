import React from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Header from './Header';

function Layout() {
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <SideBar />
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    );
}

export default Layout;
