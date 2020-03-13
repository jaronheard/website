/** @jsx jsx */
import PropTypes from "prop-types";
import { Global, jsx } from "@emotion/core";
import { MaterialTheme } from "@hackoregon/ui-themes";
import { ThemeProvider } from "@material-ui/core";
// Temporarily use the brand theme locally for ease of tweaking
import UpdatedBrandTheme from "../_Theme/UpdatedBrandTheme";

const Wrapper = ({ children }) => (
  <div>
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
