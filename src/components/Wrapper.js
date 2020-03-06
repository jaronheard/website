/** @jsx jsx */
import PropTypes from "prop-types";
import { Global, jsx, css } from "@emotion/core";
import { BrandTheme } from "@hackoregon/ui-themes";

const Wrapper = ({ children }) => (
  <div
    css={css`
      margin: 2em auto;
      padding: 0 1em;
      max-width: 600px;
    `}
  >
    <Global styles={BrandTheme} />
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
