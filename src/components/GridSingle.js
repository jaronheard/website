/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";

const GridSingle = ({ children }) => (
  <div
    css={css`
      max-width: 900px;
      display: grid;
      margin: 0 auto;
      padding: 0 1rem;
    `}
  >
    {children}
  </div>
);

GridSingle.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any
};

export default GridSingle;
