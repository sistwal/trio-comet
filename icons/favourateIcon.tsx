import React from "react";

interface FavourateIconProps {
  color?: string;
  fill?: string;
}

const FavourateIcon: React.FC<FavourateIconProps> = ({ color, fill }) => {
  return (
    <>
      <svg
        width="21"
        // style={{ boxShadow: "2px 2px 4px #000000" }}
        height="18"
        viewBox="0 0 21 18"
        fill={fill ? fill : "none"}
        // fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 6.2798C0 2.62415 3.1734 0 6.65 0C8.03038 0 9.25663 0.465245 10.25 1.12582C11.2434 0.465245 12.4696 0 13.85 0C17.3266 0 20.5 2.62415 20.5 6.2798C20.5 8.64276 19.3874 10.552 18.0921 12.0076C16.8084 13.4502 15.1898 14.6233 13.8298 15.5438L11.5112 17.1133C10.7495 17.6289 9.75053 17.6289 8.98876 17.1133L6.67015 15.5438C5.31023 14.6233 3.6916 13.4501 2.40792 12.0076C1.11263 10.552 0 8.64276 0 6.2798ZM10.25 3.04183C11.1552 2.17214 12.4165 1.5 13.85 1.5C16.6309 1.5 19 3.5793 19 6.2798C19 8.14275 18.1277 9.71118 16.9715 11.0104C15.8193 12.3052 14.3329 13.392 12.989 14.3016L10.6704 15.8711C10.4165 16.043 10.0835 16.043 9.82959 15.8711L7.51097 14.3016C6.16714 13.392 4.68066 12.3052 3.52849 11.0104C2.37235 9.71118 1.5 8.14275 1.5 6.2798C1.5 3.5793 3.86914 1.5 6.65 1.5C8.08347 1.5 9.34484 2.17214 10.25 3.04183Z"
          fill={color ? color : "#2A2929"}
          // fill="white"
        />
      </svg>
    </>
  );
};

export default FavourateIcon;
