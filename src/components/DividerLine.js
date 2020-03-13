/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const DividerLine = ({ hexColor = "#721D7C", cssStyle }) => (
  <svg
    preserveAspectRatio="none"
    width="100%"
    height="422"
    viewBox="88 0 1250 422"
    fill="none"
    css={css`
      margin-top: -100px;
      z-index: -1;
      ${cssStyle || ""}
    `}
    className="DividerLineStyle"
  >
    <rect x="83" y="273" width="1301" height="79" fill="#FDFDFD" />
    <path
      d="M1385.61 13.2225L1377.11 127.647L1316.41 104.745L1385.61 13.2225Z"
      fill="white"
    />
    <path d="M1234 159L1384 36.8902V281.109L1234 159Z" fill="white" />
    <path
      d="M892.965 299.551L1356.61 151.181L1379.76 297.386L892.965 299.551Z"
      fill="white"
    />
    <path
      d="M331.363 284.146L82.8163 352.646L83.276 213.999L331.363 284.146Z"
      fill="white"
    />
    <path
      d="M87.1599 280.001L82.501 204.552L146.865 233.637L87.1599 280.001Z"
      fill="white"
    />
    <path
      d="M99.5 248.5C561 375.5 1153.5 272.5 1356 102"
      stroke="white"
      strokeWidth="60"
    />
    <path
      d="M84.5977 200.432C262.868 327.002 1254.02 303.621 1381.52 11.0002"
      stroke={hexColor}
      strokeWidth="10"
    />
  </svg>
);

export default DividerLine;
