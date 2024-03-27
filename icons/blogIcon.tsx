import React from "react";

const BlogIcon = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.9066 8.54166C17.8862 8.39074 17.8641 8.24 17.84 8.08948L17.7867 7.75495C17.5989 6.57883 16.5844 5.71342 15.3934 5.71342L8.62929 5.71342C8.37843 4.82096 7.5586 4.16666 6.58595 4.16666H4.67632C3.44062 4.16666 2.3998 5.08997 2.25247 6.31685L2.0254 8.20778C1.78153 10.2386 1.84447 12.2946 2.21211 14.3067C2.40879 15.3832 3.30907 16.1901 4.40056 16.2682L5.66223 16.3585C8.55034 16.5651 11.4495 16.5651 14.3376 16.3585L15.7025 16.2608C16.3763 16.2126 16.9729 15.8703 17.3572 15.355C17.8686 14.8645 18.2711 14.2653 18.5314 13.5958L19.5726 10.9184C20.0174 9.77485 19.1738 8.54166 17.9468 8.54166H17.9066ZM4.67632 5.41666C4.07334 5.41666 3.56545 5.86721 3.49355 6.46588L3.26648 8.35681C3.03755 10.2632 3.09664 12.1932 3.44175 14.0821C3.53594 14.5976 3.96707 14.984 4.48976 15.0214L4.56143 15.0265L6.50484 10.006C6.84649 9.12345 7.69555 8.54166 8.64197 8.54166H16.6445C16.6322 8.45654 16.6192 8.37148 16.6057 8.2865L16.5523 7.95197C16.4614 7.38247 15.9701 6.96342 15.3934 6.96342L8.13272 6.96342C7.76022 6.96342 7.45826 6.66145 7.45826 6.28896C7.45826 5.8072 7.06771 5.41666 6.58595 5.41666H4.67632Z"
        fill={props.color}
      />
    </svg>
  );
};

export default BlogIcon;
