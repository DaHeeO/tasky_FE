import Icon from '../interface/IconInterface';

const ProjectIcon = ({ size, color }: Icon) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5 4.3252H9L12 7.3252H19C19.5304 7.3252 20.0391 7.53591 20.4142 7.91098C20.7893 8.28605 21 8.79476 21 9.3252V17.3252C21 17.8556 20.7893 18.3643 20.4142 18.7394C20.0391 19.1145 19.5304 19.3252 19 19.3252H5C4.46957 19.3252 3.96086 19.1145 3.58579 18.7394C3.21071 18.3643 3 17.8556 3 17.3252V6.3252C3 5.79476 3.21071 5.28605 3.58579 4.91098C3.96086 4.53591 4.46957 4.3252 5 4.3252Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ProjectIcon;
