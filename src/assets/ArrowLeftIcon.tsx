import Icon from '../interface/IconInterface';

const ArrowLeftIcon = ({ size, color, stroke }: Icon) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15 6.32532L9 12.3253L15 18.3253"
                stroke={color}
                strokeWidth={stroke ? stroke : 2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ArrowLeftIcon;
