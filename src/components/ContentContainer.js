/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { PropTypes } from "prop-types";

function marginCss(margin) {
  switch (margin) {
    case "sm":
      return "1.5rem 0 1rem 0";
    case "md":
      return "2rem 0 1.5rem 0";
    case "lg":
      return "2.5rem 0 2rem 0";
    default:
      return "auto";
  }
}

// The dual containers is needed because of our SVG wavy lines

const ContentContainer = ({ margin, color, children, noBackground }) => (
  <div
    css={css`
      ${!noBackground && `background-color: ${color || "pink"};`}
      padding: ${marginCss(margin)};
    `}
  >
    <div
      css={css`
        margin: ${marginCss(margin)};
        ${!noBackground && `background-color: ${color || "blue"};`}
      `}
    >
      {children}
    </div>
  </div>
);

ContentContainer.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.string,
  noBackground: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any
};

ContentContainer.defaultProps = {
  color: "white"
};

export default ContentContainer;
