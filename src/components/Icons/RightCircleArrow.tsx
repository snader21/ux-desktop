const RightCircleArrow = ({
  stroke = "currentColor",
  width = 25,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.25 15L16.25 12M16.25 12L13.25 9M16.25 12L8.75 12M21.5 12C21.5 16.9706 17.4706 21 12.5 21C7.52944 21 3.5 16.9706 3.5 12C3.5 7.02944 7.52944 3 12.5 3C17.4706 3 21.5 7.02944 21.5 12Z"
      stroke={stroke}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default RightCircleArrow;
