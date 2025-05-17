// SideBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useUserPagesStore } from '../../store/useUserPagesStore';
import styles from './SideBar.module.css';

function SideBar() {
    const { pages, addPage } = useUserPagesStore();

    return (
        <div className={styles.wrapper}>
            <nav>
                <Link to="/">Main</Link>
                <Link to="/today">Today</Link>
                <Link to="/upcoming">Upcoming</Link>
                <Link to="/calendar">Calendar</Link>
                <hr />
                {pages.map((page) => (
                    <Link key={page.id.toString()} to={page.path}>
                        {page.title}
                    </Link>
                ))}
            </nav>
            <button onClick={() => addPage('New Page')}>+ 새 페이지</button>
        </div>
    );
}
export default SideBar;
