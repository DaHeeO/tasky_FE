import Icon from '../interface/IconInterface';

const InboxIcon = ({ size, color }: Icon) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4 13.3252H7L10 16.3252H14L17 13.3252H20M4 6.3252C4 5.79476 4.21071 5.28605 4.58579 4.91098C4.96086 4.53591 5.46957 4.3252 6 4.3252H18C18.5304 4.3252 19.0391 4.53591 19.4142 4.91098C19.7893 5.28605 20 5.79476 20 6.3252V18.3252C20 18.8556 19.7893 19.3643 19.4142 19.7394C19.0391 20.1145 18.5304 20.3252 18 20.3252H6C5.46957 20.3252 4.96086 20.1145 4.58579 19.7394C4.21071 19.3643 4 18.8556 4 18.3252V6.3252Z"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export default InboxIcon;
