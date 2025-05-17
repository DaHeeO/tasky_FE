import React, { useEffect, useRef, useState } from 'react';
import styles from './Header.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSideBarStore } from '../../store/useSideBarStore';

// icon
import logo from '../../assets/logo.svg';
import stackbar from '../../assets/align-left.svg';
import searchBar from '../../assets/search.svg';
import sort from '../../assets/adjustments-horizontal.svg';
import x from '../../assets/x.svg';

function Header() {
    const navigate = useNavigate();

    const [searchValue, setSearchValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const location = useLocation();

    const imgUrl = localStorage.getItem('image');

    // 사이드 여닫기
    const toggleSideBar = useSideBarStore((state) => state.toggle);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    useEffect(() => {
        // location.pathname이 변경될 때마다 실행, 즉 페이지 이동시 검색창 클리어
        setSearchValue('');
    }, [location.pathname]);

    const searchBarActive = () => {
        // 검색 아이콘 클릭 시 placeholder 활성화
        inputRef.current?.focus();
    };

    const refreshInput = () => {
        // x 아이콘 클릭시 searchValue 비우기
        setSearchValue('');
        inputRef.current?.focus();
    };

    const toMain = () => {
        //useEffect 에서 pathname으로 리렌더링되기 떄문에
        // 아이콘 눌러도 갱신 안되는거 막기 위해 직접 구현함.
        navigate('/');
        setSearchValue('');
    };

    return (
        <header className={styles.wrapper}>
            {/* 왼쪽 sidebar  */}
            <div className={styles.leftContainer}>
                <div className={styles.iconHover}>
                    <img src={stackbar} alt="sideBarIcon" onClick={toggleSideBar} />
                </div>
                <div className={styles.logoContainer} onClick={toMain}>
                    <img src={logo} alt="logoImg" />
                    <h1>tasky</h1>
                </div>
            </div>
            {/* 검색창  */}
            <div className={styles.searchBarContainer}>
                <img src={searchBar} alt="clickToSearchBar" onClick={searchBarActive} />
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search"
                    value={searchValue}
                    onChange={handleInputChange}
                />
                {searchValue && (
                    <div className={styles.iconHover}>
                        <img onClick={refreshInput} src={x} alt="refreshInputText" />
                    </div>
                )}
                <div className={styles.iconHover}>
                    <img src={sort} alt="sortIcon" />
                </div>
            </div>
            {/* 사용자 */}
            <div className={styles.userProfile}>{imgUrl ? <img src={imgUrl} alt="userImg" /> : <></>}</div>
        </header>
    );
}

export default Header;
