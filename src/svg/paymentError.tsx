export const PaymentError = ({
  height = 8720,
  width = 72,
}: {
  height?: number;
  width?: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M67.6406 0H4.35938V8.71875L12.2695 10.8281L4.35938 12.9375V42.4688H67.6406V12.9375L59.7305 10.8281L67.6406 8.71875V0Z"
        fill="#241ACC"
      />
      <path
        d="M36 42.4688H67.6406V12.9375L59.7305 10.8281L67.6406 8.71875V0H36V42.4688Z"
        fill="#4D42F6"
      />
      <path
        d="M4.35938 8.71875H67.6406V12.9375H4.35938V8.71875Z"
        fill="#54548C"
      />
      <path
        d="M46.5469 25.5938H59.2031V29.8125H46.5469V25.5938Z"
        fill="#FFDF40"
      />
      <path d="M36 8.71875H67.6406V12.9375H36V8.71875Z" fill="#443D66" />
      <path
        d="M36 72C25.5315 72 17.0156 63.4842 17.0156 53.0156C17.0156 42.5471 25.5315 34.0312 36 34.0312C46.4685 34.0312 54.9844 42.5471 54.9844 53.0156C54.9844 63.4842 46.4685 72 36 72Z"
        fill="#FF6B4D"
      />
      <path
        d="M54.9844 53.0156C54.9844 42.5471 46.4685 34.0312 36 34.0312V72C46.4685 72 54.9844 63.4842 54.9844 53.0156Z"
        fill="#F23D3D"
      />
      <path
        d="M44.9515 47.0501L41.9687 44.0673L36.0031 50.0329L30.0375 44.0673L27.0547 47.0501L33.0203 53.0157L27.0547 58.9812L30.0375 61.964L36.0031 55.9984L41.9687 61.964L44.9515 58.9812L38.9859 53.0157L44.9515 47.0501Z"
        fill="#ECF2FF"
      />
      <path
        d="M41.9656 61.964L44.9484 58.9812L38.9828 53.0157L44.9484 47.0501L41.9656 44.0673L36 50.0329V55.9984L41.9656 61.964Z"
        fill="#E1E6F0"
      />
    </svg>
  );
};
