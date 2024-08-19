import { FC } from "react";

interface Props {
  color?: string;
}

export const SettingsIcon: FC<Props> = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.71642 24L8.23881 20.16C7.9801 20.06 7.73612 19.94 7.50687 19.8C7.27761 19.66 7.05393 19.51 6.83582 19.35L3.28358 20.85L0 15.15L3.07463 12.81C3.05473 12.67 3.04478 12.5348 3.04478 12.4044V11.5956C3.04478 11.4652 3.05473 11.33 3.07463 11.19L0 8.85L3.28358 3.15L6.83582 4.65C7.05473 4.49 7.28358 4.34 7.52239 4.2C7.76119 4.06 8 3.94 8.23881 3.84L8.71642 0H15.2836L15.7612 3.84C16.0199 3.94 16.2639 4.06 16.4931 4.2C16.7224 4.34 16.9461 4.49 17.1642 4.65L20.7164 3.15L24 8.85L20.9254 11.19C20.9453 11.33 20.9552 11.4652 20.9552 11.5956V12.4044C20.9552 12.5348 20.9353 12.67 20.8955 12.81L23.9701 15.15L20.6866 20.85L17.1642 19.35C16.9453 19.51 16.7164 19.66 16.4776 19.8C16.2388 19.94 16 20.06 15.7612 20.16L15.2836 24H8.71642ZM12.0597 16.2C13.2139 16.2 14.199 15.79 15.0149 14.97C15.8308 14.15 16.2388 13.16 16.2388 12C16.2388 10.84 15.8308 9.85 15.0149 9.03C14.199 8.21 13.2139 7.8 12.0597 7.8C10.8856 7.8 9.89532 8.21 9.08896 9.03C8.28259 9.85 7.8798 10.84 7.8806 12C7.8806 13.16 8.28338 14.15 9.08896 14.97C9.89453 15.79 10.8848 16.2 12.0597 16.2Z"
        fill={color || "white"}
      />
    </svg>
  );
};
