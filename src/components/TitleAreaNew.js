/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { PropTypes } from "prop-types";

import {
  smBreak,
  colors,
  xsBreak,
  mdBreak,
  lgBreak
} from "../_Theme/UpdatedBrandTheme";
import CivicHeaderImage from "./CivicHeaderImage";
import DividerLine from "./DividerLine";

const NewTitleArea = ({
  backgroundImage,
  children,
  dividerLineColor = colors.green.hex,
  childrenContainerStyle,
  showHeaderImage
}) => {
  return (
    <div
      css={css`
        z-index: -1;
      `}
    >
      <div
        css={css`
          background-image: ${backgroundImage};
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: local;
          background-position: center;
          background-color: ${colors.primary.hex};
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 600px;
          z-index: -1;
          ${xsBreak} {
            height: 900px;
          }
        `}
      >
        {showHeaderImage ? (
          <div
            css={css`
              display: block;
              position: absolute;
              right: 1rem;
              bottom: 0;
              height: 350px;
              ${lgBreak} {
                display: none;
              }
            `}
          >
            <CivicHeaderImage
              css={css`
                display: block;
                ${lgBreak} {
                  display: none;
                }
              `}
            />
          </div>
        ) : null}
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-content: stretch;
          text-align: left;
          padding: 25px 40px;
          margin-bottom: -30px;
          height: 370px;
          justify-content: stretch;

          ${mdBreak} {
            height: auto;
          }

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
        {showHeaderImage ? (
          <div
            css={css`
              display: none;
              ${xsBreak} {
                display: flex;
                height: 350px;
                margin: 0 auto 2rem auto;
              }
            `}
          >
            <CivicHeaderImage />
          </div>
        ) : null}
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
  showHeaderImage: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any
};

export default NewTitleArea;
