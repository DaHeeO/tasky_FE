import React, { useEffect } from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Header from './Header';
import { useSideBarStore } from '../../store/useSideBarStore';

function Layout() {
    const setSidebarOpen = useSideBarStore((s) => s.setOpen);
    const setUserToggled = useSideBarStore((s) => s.setUserToggled);
    const userToggled = useSideBarStore((s) => s.userToggled);
    const isOpen = useSideBarStore((s) => s.isOpen);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            // 먼저 초기화 조건 판단: 사용자 조작 상태를 해제할 수 있는 상황인지
            if (width >= 700 && isOpen && userToggled) {
                setUserToggled(false); // 사용자 조작 상태 해제
            }

            // 그 다음 자동 판단은 사용자 조작 상태면 무시
            if (userToggled) return;

            // 자동 사이드바 열고 닫기
            // 초기에 영향을 줌
            // 그리고 리사이징 할때도
            if (width < 700) {
                setSidebarOpen(false);
            } else {
                setSidebarOpen(true);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // 초기 실행

        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen, userToggled, setSidebarOpen, setUserToggled]);

    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.main}>
                <div className={`${styles.sidebarContainer} ${isOpen ? styles.open : styles.closed}`}>
                    <SideBar />
                </div>
                <main className={styles.outlet}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default Layout;
