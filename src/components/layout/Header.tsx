import React from 'react';
import styles from './Header.module.css';
// icon
import logo from '../../assets/logo.svg';
import stackbar from '../../assets/align-left.svg';
import searchBar from '../../assets/search.svg';
import sort from '../../assets/adjustments-horizontal.svg';

function Header() {
    return (
        <header className={styles.wrapper}>
            {/* 왼쪽 sidebar  */}
            <div className={styles.leftContainer}>
                <div className={styles.iconHover}>
                    <img src={stackbar} alt="sideBarIcon" />
                </div>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="logoImg" />
                    <h1>tasky</h1>
                </div>
            </div>
            {/* 검색창  */}
            <div className={styles.searchBarContainer}>
                <img src={searchBar} alt="searchIcon" />
                <input placeholder="Search" />
                <div className={styles.iconHover}>
                    <img src={sort} alt="sortIcon" />
                </div>
            </div>
            <div>
                <p>사용자</p>
            </div>
        </header>
    );
}

export default Header;
