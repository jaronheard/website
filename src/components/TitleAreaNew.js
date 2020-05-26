/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { PropTypes } from "prop-types";

import { smBreak, colors, xsBreak } from "../_Theme/UpdatedBrandTheme";
import DividerLine from "./DividerLine";

const NewTitleArea = ({
  backgroundImage,
  children,
  dividerLineColor = colors.green.hex,
  childrenContainerStyle
}) => {
  return (
    <div
      css={css`
        z-index: -1;
      `}
    >
      <picture
        css={css`
          background-image: ${backgroundImage};
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: local;
          background-position: center;
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 600px;
          z-index: -1;
          opacity: 0.8;
        `}
      />
      <div
        css={css`
          display: grid;
          align-content: stretch;
          text-align: left;
          padding: 25px 40px;
          margin-bottom: -30px;
          height: 370px;
          justify-content: stretch;

          ${smBreak} {
            margin-bottom: -45px;
            height: auto;
          }

          ${xsBreak} {
            padding: 20px 20px;
            height: auto;
          }

          ${childrenContainerStyle}
        `}
      >
        {children}
      </div>
      <DividerLine
        hexColor={dividerLineColor}
        swoopStyle={css`
          margin-bottom: -1.5rem;
          margin-top: 2rem;
        `}
        lineStyle={css`
          margin-bottom: 0;
          height: 50px;
          background-color: white;

          ${smBreak} {
            margin-top: 45px;
          }
        `}
      />
    </div>
  );
};

NewTitleArea.propTypes = {
  backgroundImage: PropTypes.string,
  dividerLineColor: PropTypes.string,
  childrenContainerStyle: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any
};

export default NewTitleArea;
