import Icon from '../interface/IconInterface';

const PencilIcon = ({ size, color, stroke, className }: Icon) => {
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
                d="M13.5 6.82526L17.5 10.8253M4 20.3253H8L18.5 9.82525C19.0304 9.29482 19.3284 8.5754 19.3284 7.82525C19.3284 7.07511 19.0304 6.35569 18.5 5.82525C17.9696 5.29482 17.2501 4.99683 16.5 4.99683C15.7499 4.99683 15.0304 5.29482 14.5 5.82525L4 16.3253V20.3253Z"
                stroke={color}
                strokeWidth={stroke ? stroke : 2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default PencilIcon;
