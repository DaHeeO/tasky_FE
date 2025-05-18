// SideBar.tsx
import { Link } from 'react-router-dom';
import styles from './SideBar.module.css';

import HomeIcon from '../../assets/home.svg';
import TodayIcon from '../../assets/today.svg';
import UpcomingIcon from '../../assets/up-coming.svg';
import CalendarIcon from '../../assets/calendar.svg';

interface Path {
    path: string;
    name: string;
    Icon?: any;
}

const commonPaths: Path[] = [
    { path: '/', name: 'Main', Icon: HomeIcon },
    { path: '/today', name: 'Today', Icon: TodayIcon },
    { path: '/upcoming', name: 'Upcoming', Icon: UpcomingIcon },
    { path: '/calendar', name: 'Calendar', Icon: CalendarIcon },
];
function SideBar() {
    return (
        <div className={styles.wrapper}>
            <nav>
                {commonPaths.map((pathInfo) => {
                    return <SideBarComponent key={pathInfo.path} {...pathInfo} />;
                })}
            </nav>
        </div>
    );
}

const SideBarComponent = ({ path, name, Icon }: Path) => {
    return (
        <Link to={path} className={styles.LinkContainer}>
            {Icon && <img src={Icon} alt={name} />}
            <span>{name}</span>
        </Link>
    );
};

export default SideBar;
