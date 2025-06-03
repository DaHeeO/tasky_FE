// SideBar.tsx
import { Link } from 'react-router-dom';
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
            {Icon && <Icon size={20} color={'#000000'} />}
            <span>{name}</span>
        </Link>
    );
};

export default SideBar;
