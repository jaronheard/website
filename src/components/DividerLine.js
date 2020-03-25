/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const DividerLine = ({
  hexColor = "#721D7C",
  lineStyle,
  swoopStyle,
  swoopUp
}) => {
  const swoopUpStyle = css`
    transform: scale(-1, 1);
  `;

  return (
    <div
      css={css`
        margin-bottom: -10px;
      `}
    >
      {/* Straight line for smaller screens */}
      <div
        className="DividerLinePadding"
        css={css`
          border-top: 10px solid ${hexColor};
          ${lineStyle || ""}
        `}
      />

      {/* Swoop for larger screens */}
      <svg
        preserveAspectRatio="none"
        width="100%"
        height="96"
        viewBox="0 0 1332 96"
        fill="none"
        className="DividerLineStyle"
        css={css`
          ${swoopUp ? swoopUpStyle : ""}
          ${swoopStyle || ""}
          @media (max-width: 1230px) {
            height: 70px;
          }
        `}
      >
        <mask
          id="mask0"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="1332"
          height="96"
        >
          <rect width="1332" height="96" fill="#C4C4C4" />
        </mask>
        <g mask="url(#mask0)">
          <path
            d="M356.502 60.1772L653.982 100.664H59.0222L356.502 60.1772Z"
            fill="white"
          />
          <path
            d="M1186.83 82.1357L1332.91 50.9248L1332.4 115.149L1186.83 82.1357Z"
            fill="white"
          />
          <path d="M180 85.8406L0 126.46L0 45.2218L180 85.8406Z" fill="white" />
          <path
            d="M-15.9512 28.6152C392.064 128.003 1204.93 146.182 1332.43 70.87"
            stroke="white"
            strokeWidth="50"
          />
          <path
            d="M-12.0137 2.68848C397.844 102.261 1208.64 120.041 1336.65 44.7835"
            stroke={hexColor}
            strokeWidth="10"
          />
        </g>
      </svg>
    </div>
  );
};

export default DividerLine;
