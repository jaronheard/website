/** @jsx jsx */
import PropTypes from "prop-types";
import { Global, jsx, css } from "@emotion/core";
// Temporarily use the brand theme locally for ease of tweaking
import UpdatedBrandTheme from "../_Theme/UpdatedBrandTheme";

const Wrapper = ({ children }) => (
  <div
    css={css`
      margin: 2em auto;
      padding: 0 1em;
      max-width: 600px;
    `}
  >
    <Global styles={UpdatedBrandTheme} />
    {children}
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Wrapper;
