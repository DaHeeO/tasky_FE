import Icon from '../interface/IconInterface';

const CalendarIcon = ({ size, color, stroke, className }: Icon) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M16 3.3252V7.3252M8 3.3252V7.3252M4 11.3252H20M4 7.3252C4 6.79476 4.21071 6.28605 4.58579 5.91098C4.96086 5.53591 5.46957 5.3252 6 5.3252H18C18.5304 5.3252 19.0391 5.53591 19.4142 5.91098C19.7893 6.28605 20 6.79476 20 7.3252V19.3252C20 19.8556 19.7893 20.3643 19.4142 20.7394C19.0391 21.1145 18.5304 21.3252 18 21.3252H6C5.46957 21.3252 4.96086 21.1145 4.58579 20.7394C4.21071 20.3643 4 19.8556 4 19.3252V7.3252ZM8 15.3252H10V17.3252H8V15.3252Z"
                stroke={color}
                strokeWidth={stroke ? stroke : 2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default CalendarIcon;
