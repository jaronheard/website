/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";

const GridSingle = ({ children, wideContent, containerStyle }) => (
  <div
    css={css`
      max-width: ${wideContent ? "1330px" : "1100px"};
      display: grid;
      margin: 0 auto;
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
