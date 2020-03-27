/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { PropTypes } from "prop-types";

const ContentContainer = ({ children }) => (
  <div
    css={css`
      background-color: white;
    `}
  >
    {children}
  </div>
);

ContentContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any
};

export default ContentContainer;
