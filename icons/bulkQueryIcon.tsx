import React from "react";

const BulkQueryIcon = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00194 4.5529C10.6983 4.34967 13.4065 4.36301 16.1007 4.59277L17.7245 4.73124C18.951 4.83584 19.9464 5.76665 20.1329 6.9834L20.2353 7.65173C20.5829 9.91963 20.5505 12.2296 20.1392 14.4868C19.9362 15.6006 18.9661 16.41 17.834 16.41H8.85756C8.65104 16.41 8.44774 16.4611 8.26583 16.5589L4.35504 18.6606C4.12261 18.7855 3.84163 18.7791 3.61515 18.6437C3.38867 18.5083 3.25 18.2639 3.25 18V9.48269C3.25 6.90409 5.23741 4.76126 7.80871 4.56746L8.00194 4.5529ZM8 9.49998C7.30964 9.49998 6.75 10.0596 6.75 10.75C6.75 11.4403 7.30964 12 8 12C8.69036 12 9.25 11.4403 9.25 10.75C9.25 10.0596 8.69036 9.49998 8 9.49998ZM12 9.49998C11.3096 9.49998 10.75 10.0596 10.75 10.75C10.75 11.4403 11.3096 12 12 12C12.6904 12 13.25 11.4403 13.25 10.75C13.25 10.0596 12.6904 9.49998 12 9.49998ZM14.75 10.75C14.75 10.0596 15.3096 9.49998 16 9.49998C16.6904 9.49998 17.25 10.0596 17.25 10.75C17.25 11.4403 16.6904 12 16 12C15.3096 12 14.75 11.4403 14.75 10.75Z"
        fill={props.color}
      />
    </svg>
  );
};

export default BulkQueryIcon;
