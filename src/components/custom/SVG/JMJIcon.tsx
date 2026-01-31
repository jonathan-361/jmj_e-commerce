interface JMJIconProps {
  className?: string;
}

const JMJIcon = ({ className }: JMJIconProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 205.08 86"
    >
      <g>
        <path
          d="M45.66,1.76c1.04-1.04,3.2,1.34,4.19,2.54,4.02,4.79,6.26,10.83,7.56,17.24,4.27,19.88-1.65,61.27-27.99,61.03-19.44-.14-31.47-13.16-27-32.72,1.18-4.79,3.89-9.4,7.85-12.74,5.01-4.4,13.91-7.92,19.46-5.3,2.01.9,4.87,2.56,4.43,5.07-.38,1.62-3,2.84-5.9,4.5-3.28,1.81-6.04,4.88-6.77,8.64-1.89,8.53,6.04,15.11,13.85,11.02,12.05-7.28,14.21-30.18,12.89-43.04-.36-3.5-1.22-6.95-2.19-10.3-.46-1.82-1.37-4.76-.43-5.9l.04-.04Z"
          fill="none"
          stroke="#db191a"
          strokeWidth={3}
          strokeMiterlimit={10}
        />

        <circle
          cx="31.75"
          cy="51.5"
          r="6.75"
          fill="none"
          stroke="#db191a"
          strokeWidth={2}
        />

        <text
          x="63.66"
          y="48.53"
          fill="#000000"
          fontSize={26}
          fontFamily="Bree Serif, serif"
        >
          Guayaberas
        </text>

        <text
          x="111.2"
          y="73.48"
          fill="#000000"
          fontSize={26}
          fontFamily="Bree Serif, serif"
        >
          JMJ
        </text>
      </g>
    </svg>
  );
};

export default JMJIcon;
