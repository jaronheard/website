/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { PropTypes } from "prop-types";

import {
  smBreak,
  lgCardBreak,
  xsBreak,
  h2Subtitle,
  colors
} from "../_Theme/UpdatedBrandTheme";
import GridSingle from "./GridSingle";

const DefaultTitleAreaContent = ({ subtitle, title, wideContent }) => {
  return (
    <GridSingle
      containerStyle={css`
        width: 100%;
        padding: 0;
      `}
      wideContent={wideContent}
    >
      <h2
        css={css`
          max-width: 700px;
          margin: 0;
          ${lgCardBreak} {
            max-width: 600px;
          }

          ${smBreak} {
            max-width: 500px;
          }

          ${xsBreak} {
            max-width: 400px;
          }

          ${h2Subtitle}
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 0.1rem;
        `}
      >
        <div>
          <span
            css={css`
              background-color: ${colors.subdued.hex};
              line-height: 1.4;
            `}
          >
            {subtitle || ""}
          </span>
        </div>
      </h2>
      <h1
        css={css`
          display: grid;
          margin: 0;
          justify-self: right;
          align-self: end;
          background-color: ${colors.subdued.hex};
        `}
      >
        {title || ""}
      </h1>
    </GridSingle>
  );
};

DefaultTitleAreaContent.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  wideContent: PropTypes.bool
};

export default DefaultTitleAreaContent;
