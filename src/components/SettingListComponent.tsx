import { Settings } from '../interface/PathInterface';
import styles from './SettingListComponent.module.css';

const SettingListComponent = ({ onClick, name, Icon }: Settings) => {
    return (
        <div onClick={onClick} className={styles.LinkContainer}>
            {Icon && <Icon size={20} color={'#666'} />}
            <span>{name}</span>
        </div>
    );
};

export default SettingListComponent;
