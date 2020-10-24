/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "@reach/router";
import PropTypes from "prop-types";
import { colors, noHover } from "../_Theme/UpdatedBrandTheme";

const focusBorder = {
  ":hover, :focus": {
    outline: "none",
    boxShadow: `0px 4px 0px ${colors.pink.hex}`,
    background: "none"
  }
};

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

ConditionalWrapper.propTypes = {
  condition: PropTypes.bool,
  wrapper: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any
};

const ShadowBox = ({
  title,
  MainContent,
  FooterContent,
  Button,
  cardStyle,
  shadowColor,
  wide,
  fullWidth,
  children,
  link
}) => {
  return (
    <ConditionalWrapper
      condition={!!link}
      wrapper={chilldren => (
        <Link to={link} aria-label={title} css={[noHover, focusBorder]}>
          {chilldren}
        </Link>
      )}
    >
      <div
        className="ShadowBox"
        css={css`
        ${wide || FooterContent ? `max-width: 400px;` : ""}
        ${fullWidth ? `max-width: 1100px; margin: 1rem auto; width: 100%;` : ""}
        ${shadowColor ? `box-shadow: 6px 6px 0px rgb(${shadowColor});` : ""}
        ${cardStyle}
        ${FooterContent ? `display: grid;` : ""}
      `}
      >
        <div className="ShadowBoxContent">
          {title && (
            <h3
              css={css`
                margin-top: 0;
              `}
            >
              {title}
            </h3>
          )}
          {MainContent}
          {children}
          {Button}
        </div>
        {FooterContent && (
          <div
            className="ShadowBoxFooter"
            css={css`
              ${shadowColor
                ? `
            > ul {
              background-color: rgba(${shadowColor}, .1);
            }
          `
                : ""}
            `}
          >
            {FooterContent}
          </div>
        )}
      </div>
    </ConditionalWrapper>
  );
};

ShadowBox.propTypes = {
  title: PropTypes.string,
  MainContent: PropTypes.node,
  FooterContent: PropTypes.node,
  Button: PropTypes.node,
  cardStyle: PropTypes.string, // css
  shadowColor: PropTypes.string, // hex code
  wide: PropTypes.bool,
  fullWidth: PropTypes.bool,
  link: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any
};

export default ShadowBox;
