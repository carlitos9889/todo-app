import { FC } from "react";

interface Props {
  color?: string;
}

export const MyTaskIcon: FC<Props> = ({ color }) => {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 20H16C17.103 20 18 19.103 18 18V3C18 1.897 17.103 1 16 1H14C14 0.734784 13.8946 0.48043 13.7071 0.292893C13.5196 0.105357 13.2652 0 13 0H5C4.73478 0 4.48043 0.105357 4.29289 0.292893C4.10536 0.48043 4 0.734784 4 1H2C0.897 1 0 1.897 0 3V18C0 19.103 0.897 20 2 20ZM2 3H4V5H14V3H16V18H2V3Z"
        fill={color || "white"}
      />
    </svg>
  );
};
