/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const DividerLine = ({ hexColor = "#721D7C", lineStyle, swoopStyle }) => {
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
        height="31"
        viewBox="0 0 1332 31"
        fill="none"
        preserveAspectRatio="none"
        width="100%"
        className="DividerLineStyle"
        css={css`
          ${swoopStyle || ""}
          padding: 20px 0;
        `}
      >
        <mask
          id="mask0"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="1332"
          height="31"
        >
          <rect width="1332" height="31" fill="white" />
        </mask>
        <g mask="url(#mask0)">
          <path
            d="M436.879 35.5034L-1.2372 31.1987L-0.470247 9.23608L436.879 35.5034Z"
            fill="white"
          />
          <rect x="811" y="10" width="521" height="30" fill="white" />
          <rect x="290" y="28" width="521" height="10" fill="white" />
          <path
            d="M593.556 28.3199L818.805 8.82517L819.639 30.3082L593.556 28.3199Z"
            fill="white"
          />
          <path
            d="M-9.30069 7.50027C660.5 53 661 -2.5 1340.02 7.50027"
            stroke={hexColor}
            strokeWidth="10"
          />
        </g>
      </svg>
    </div>
  );
};

export default DividerLine;
