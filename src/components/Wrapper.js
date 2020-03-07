/** @jsx jsx */
import PropTypes from "prop-types";
import { Global, jsx, css } from "@emotion/core";
import { MaterialTheme } from "@hackoregon/ui-themes";
import { ThemeProvider } from "@material-ui/core";
// Temporarily use the brand theme locally for ease of tweaking
import UpdatedBrandTheme from "../_Theme/UpdatedBrandTheme";

const Wrapper = ({ children }) => (
  <div
    css={css`
      margin: 0 auto;
      padding: 0 1em;
      max-width: 1200px;
    `}
  >
    <Global styles={UpdatedBrandTheme} />
    <ThemeProvider theme={MaterialTheme}>{children}</ThemeProvider>
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Wrapper;
