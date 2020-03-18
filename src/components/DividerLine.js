/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const DividerLine = ({ hexColor = "#721D7C", swoopStyle, swoopUp }) => {
  const swoopUpStyle = css`
    margin: 0;
    transform: scale(-1, 1);
  `;
  const swoopDownStyle = css`
    margin: -40px 0 40px;
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
        `}
      />
      {/* Swoop for larger screens */}
      <svg
        preserveAspectRatio="none"
        width="100%"
        height="222"
        viewBox="0 0 1332 222"
        fill="none"
        className="DividerLineStyle"
        css={css`
          ${swoopUp ? swoopUpStyle : swoopDownStyle}
          ${swoopStyle || ""}
        `}
      >
        <mask
          id="mask0"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="1332"
          height="222"
        >
          <rect width="1332" height="222" fill="#C4C4C4" />
        </mask>
        <g mask="url(#mask0)">
          <path d="M356.5 136L653.98 221.5H59.0203L356.5 136Z" fill="white" />
          <path
            d="M1199.31 227.9L1336.03 192.567L1335.52 265.139L1199.31 227.9Z"
            fill="white"
          />
          <path
            d="M405.451 132.749L-1.97049 263.489L-3.75619 7.71081L405.451 132.749Z"
            fill="white"
          />
          <path
            d="M-6.18945 35.0005C385.273 188.98 1180.98 292.226 1315.9 220.808"
            stroke="white"
            strokeWidth="50"
          />
          <path
            d="M-2.18945 6.00049C393.647 160.595 1197.94 265.047 1334.18 193.815"
            stroke={hexColor}
            strokeWidth="10"
          />
        </g>
      </svg>
    </div>
  );
};

export default DividerLine;
