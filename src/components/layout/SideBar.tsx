import React from 'react';
import styles from './SideBar.module.css';
import logo from '../../assets/logo.svg';

function SideBar() {
    return (
        <div className={styles.wrapper}>
            <header className={styles.headerContainer}>
                <img src={logo} alt="logo" />
                <h1>tasky</h1>
            </header>
        </div>
    );
}

export default SideBar;
