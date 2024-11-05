export const ArrowUp = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="800px"
      height="800px"
      viewBox="6 6 12 12" // Tight viewBox to remove padding
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />

      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        <path
          d="M6 18L18 6M18 6H9M18 6V15"
          stroke="currentColor"
          stroke-width="1" // Increased stroke-width
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
