// SideBar.tsx
import { Link, useLocation } from 'react-router-dom';
import styles from './SideBar.module.css';
import HomeIcon from '../../assets/HomeIcon';
import CalendarIcon from '../../assets/CalendarIcon';
import PencilIcon from '../../assets/PencilIcon';
import InboxIcon from '../../assets/InboxIcon';
import { Path } from '../../interface/PathInterface';

const commonPaths: Path[] = [
    { path: '/', name: 'Home', Icon: HomeIcon },
    { path: '/today', name: 'Today', Icon: PencilIcon },
    { path: '/upcoming', name: 'Upcoming', Icon: InboxIcon },
    { path: '/calendar', name: 'Calendar', Icon: CalendarIcon },
];

function SideBar() {
    const location = useLocation();

    return (
        <div className={styles.wrapper}>
            <nav>
                {commonPaths.map((pathInfo) => {
                    const isActive = location.pathname === pathInfo.path;
                    return <SideBarComponent key={pathInfo.path} {...pathInfo} isActive={isActive} />;
                })}
            </nav>
        </div>
    );
}

interface SideBarComponentProps extends Path {
    isActive: boolean;
}

const SideBarComponent = ({ path, name, Icon, isActive }: SideBarComponentProps) => {
    return (
        <Link to={path} className={`${styles.LinkContainer} ${isActive ? styles.active : ''}`}>
            {Icon && (
                <Icon
                    size={20}
                    color={isActive ? '#ff8c00' : '#000000'}
                    stroke={isActive ? 2 : 1.5}
                    className={isActive ? styles.activeIcon : ''}
                />
            )}
            <span>{name}</span>
        </Link>
    );
};

export default SideBar;
