/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";
import { lgCardBreak } from "../_Theme/UpdatedBrandTheme";

const GridSingle = ({ children, wideContent, containerStyle }) => (
  <div
    css={css`
      max-width: ${wideContent ? "1100px" : "900px"};
      display: grid;
      margin: 0 auto;

      ${lgCardBreak} {
        max-width: ${wideContent ? "900px" : "900px"};
      }

      ${containerStyle}
    `}
  >
    {children}
  </div>
);

GridSingle.propTypes = {
  wideContent: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
  containerStyle: PropTypes.string
};

export default GridSingle;
