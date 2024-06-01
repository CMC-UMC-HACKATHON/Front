export const PhotoIcon = () => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.83333 16.5C1.32917 16.5 0.897722 16.3206 0.539 15.9619C0.180278 15.6032 0.000611111 15.1714 0 14.6667V1.83333C0 1.32917 0.179667 0.897722 0.539 0.539C0.898333 0.180278 1.32978 0.000611111 1.83333 0H14.6667C15.1708 0 15.6026 0.179667 15.9619 0.539C16.3213 0.898333 16.5006 1.32978 16.5 1.83333V14.6667C16.5 15.1708 16.3206 15.6026 15.9619 15.9619C15.6032 16.3213 15.1714 16.5006 14.6667 16.5H1.83333ZM2.75 12.8333H13.75L10.3125 8.25L7.5625 11.9167L5.5 9.16667L2.75 12.8333Z"
        fill="#593EEC"
      />
    </svg>
  );
};

export const ArrowRight = () => {
  return (
    <svg
      width="27"
      height="34"
      viewBox="0 0 27 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 10.5L17 17L10.5 23.5"
        stroke="#593EEC"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const CheckOutlineIcon = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12.5" r="11.25" stroke="#D1D1D1" strokeWidth="1.5" />
      <path
        d="M7 12.3205L10.5897 15.9103L17 9.5"
        stroke="#D1D1D1"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const CheckedIcon = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12.5"
        r="11.25"
        fill="#593EEC"
        stroke="#593EEC"
        strokeWidth="1.5"
      />
      <path
        d="M7 12.3205L10.5897 15.9103L17 9.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const StarIcon = ({ color }: { color?: string }) => {
  return (
    <svg
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.35859 2.34387C7.00964 -0.452163 10.9904 -0.452163 11.6414 2.34387C11.9471 3.65687 13.1709 4.54598 14.5141 4.43101C17.3745 4.18618 18.6046 7.97206 16.1466 9.45527C14.9923 10.1518 14.5249 11.5904 15.0493 12.8323C16.1661 15.4771 12.9456 17.8169 10.7754 15.9375C9.75632 15.055 8.24368 15.055 7.22457 15.9375C5.05439 17.8169 1.83392 15.4771 2.95068 12.8323C3.4751 11.5904 3.00767 10.1518 1.8534 9.45527C-0.604596 7.97206 0.625512 4.18618 3.48588 4.43101C4.8291 4.54598 6.05286 3.65687 6.35859 2.34387Z"
        fill={color}
      />
    </svg>
  );
};
