import Icon from '../interface/IconInterface';

const HomeIcon = ({ size, color, stroke, className }: Icon) => {
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
                d="M16 15.3253C13.79 16.6583 10.208 16.6583 8 15.3253M19 9.03533L13.667 4.88733C13.199 4.52324 12.623 4.32556 12.03 4.32556C11.4371 4.32556 10.861 4.52324 10.393 4.88733L5.05903 9.03533C4.73847 9.28462 4.47912 9.60386 4.30078 9.96868C4.12245 10.3335 4.02984 10.7343 4.03003 11.1403V18.3403C4.03003 18.8708 4.24074 19.3795 4.61582 19.7545C4.99089 20.1296 5.4996 20.3403 6.03003 20.3403H18.03C18.5605 20.3403 19.0692 20.1296 19.4442 19.7545C19.8193 19.3795 20.03 18.8708 20.03 18.3403V11.1403C20.03 10.3173 19.65 9.54033 19 9.03533Z"
                stroke={color}
                strokeWidth={stroke ? stroke : 2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default HomeIcon;
