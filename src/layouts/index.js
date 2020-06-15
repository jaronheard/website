/** @jsx jsx */
import PropTypes from "prop-types";
import { Global, css, jsx } from "@emotion/core";
import emotionReset from "emotion-reset";
// Temporarily use the brand theme locally for ease of tweaking
import UpdatedBrandTheme from "../_Theme/UpdatedBrandTheme";

const Wrapper = ({ children }) => (
  <div css={css``}>
    <Global
      styles={css`
        ${emotionReset}
        ${UpdatedBrandTheme}
      `}
    />
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
