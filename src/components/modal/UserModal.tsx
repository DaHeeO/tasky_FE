import styles from './UserModal.module.css';
import ModalPortal from './Portal';
import SettingListComponent from '../SettingListComponent';
import LogoutIcon from '../../assets/LogoutIcon';
import { Settings } from '../../interface/PathInterface';
import SettingsIcon from '../../assets/SettingsIcon';
import { useNavigate } from 'react-router-dom';

interface ModalProps {
    onClose: () => void;
}

const UserModal = ({ onClose }: ModalProps) => {
    const navigate = useNavigate();

    const navigateSettings = () => {
        navigate('/settings');
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    const settingPath: Settings[] = [
        { onClick: navigateSettings, name: 'Settings', Icon: SettingsIcon },
        { onClick: handleLogout, name: 'Logout', Icon: LogoutIcon },
    ];

    return (
        <ModalPortal>
            <div className={styles.modalOverlay} onClick={onClose}>
                <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                    {settingPath.map((pathInfo) => {
                        return (
                            <div key={pathInfo.name} onClick={onClose}>
                                <SettingListComponent {...pathInfo} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </ModalPortal>
    );
};

export default UserModal;
