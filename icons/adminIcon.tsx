import React from "react";
// import { color } from "@/utils/CustomTheme/color";

const AdminIcon = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.04165 8.75008C9.04165 6.01167 11.2616 3.79175 14 3.79175C16.7384 3.79175 18.9583 6.01167 18.9583 8.75008C18.9583 11.4885 16.7384 13.7084 14 13.7084C11.2616 13.7084 9.04165 11.4885 9.04165 8.75008ZM14 5.54175C12.2281 5.54175 10.7916 6.97817 10.7916 8.75008C10.7916 10.522 12.2281 11.9584 14 11.9584C15.7719 11.9584 17.2083 10.522 17.2083 8.75008C17.2083 6.97817 15.7719 5.54175 14 5.54175Z"
        // fill="#2A2929"
        fill={props.color}
        fillOpacity="0.8"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.33331 17.2084C7.88357 17.2084 6.70831 18.3837 6.70831 19.8334V21.2197C6.70831 21.2409 6.72361 21.2589 6.74444 21.2623C11.5497 22.0468 16.4503 22.0468 21.2555 21.2623C21.2764 21.2589 21.2916 21.2409 21.2916 21.2197V19.8334C21.2916 18.3837 20.1164 17.2084 18.6666 17.2084H18.269C18.2382 17.2084 18.2077 17.2133 18.1784 17.2228L17.1687 17.5525C15.1097 18.2249 12.8903 18.2249 10.8313 17.5525L9.82153 17.2228C9.7923 17.2133 9.76174 17.2084 9.73099 17.2084H9.33331ZM4.95831 19.8334C4.95831 17.4172 6.91707 15.4584 9.33331 15.4584H9.73099C9.94623 15.4584 10.1601 15.4924 10.3647 15.5593L11.3745 15.889C13.0805 16.446 14.9195 16.446 16.6255 15.889L17.6352 15.5593C17.8398 15.4924 18.0537 15.4584 18.269 15.4584H18.6666C21.0829 15.4584 23.0416 17.4172 23.0416 19.8334V21.2197C23.0416 22.0985 22.4048 22.8478 21.5375 22.9894C16.5455 23.8044 11.4544 23.8044 6.46246 22.9894C5.59518 22.8478 4.95831 22.0985 4.95831 21.2197V19.8334Z"
        // fill="#2A2929"
        fill={props.color}
        fillOpacity="0.8"
      />
    </svg>
  );
};

export default AdminIcon;
