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
        height="47"
        viewBox="0 0 1332 47"
        fill="none"
        preserveAspectRatio="none"
        width="100%"
        className="DividerLineStyle"
        css={css`
          ${swoopStyle || ""}
          padding: 20px 0;
          @media (max-width: 1230px) {
            height: 30px;
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
          height="47"
        >
          <rect width="1332" height="47" fill="#C4C4C4" />
        </mask>
        <g mask="url(#mask0)">
          <path d="M437 45.5L-1 68.4497V22.5503L437 45.5Z" fill="white" />
          <rect x="811" y="13" width="521" height="65" fill="white" />
          <rect x="290" y="37" width="521" height="10" fill="white" />
          <rect x="925" y="10" width="253" height="4" fill="white" />
          <path
            d="M593.556 37.3199L818.805 17.8252L819.639 39.3082L593.556 37.3199Z"
            fill="white"
          />
          <path
            d="M-9.30175 16.5002C660.482 91.7727 660.5 -29.7275 1340.02 16.5002"
            stroke={hexColor}
            strokeWidth="10"
          />
        </g>
      </svg>
    </div>
  );
};

export default DividerLine;
