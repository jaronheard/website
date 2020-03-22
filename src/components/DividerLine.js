/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const DividerLine = ({ hexColor = "#721D7C", lineStyle }) => {
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
    </div>
  );
};

export default DividerLine;
