import Icon from '../interface/IconInterface';

const ArrowRightIcon = ({ size, color, stroke }: Icon) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9 6.32532L15 12.3253L9 18.3253"
                stroke={color}
                strokeWidth={stroke ? stroke : 2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ArrowRightIcon;
