/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";
import {
  colors,
  colorShadows,
  colorBorders,
  xsBreak
} from "../_Theme/UpdatedBrandTheme";

const quoteBox = css`
  padding: 0 70px;
  max-width: 790px;
  margin: 60px auto 0;
  position: relative;
`;
const markSize = css`
  margin: 0.5rem;
  height: 3rem;
  width: 3rem;
  ${xsBreak} {
    height: 2.5rem;
    width: 2.5rem;
  }
`;
const topRight = css`
  position: absolute;
  top: 0;
  left: 0;
`;
const bottomLeft = css`
  position: absolute;
  bottom: 0;
  right: 0;
`;
const quoteText = css`
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 900;
  color: ${colors.primary.hex};
  ${xsBreak} {
    font-size: 1.25rem;
    font-weight: 800;
  }
`;
const authorText = css`
  font-size: 1rem;
  font-style: italic;
  line-height: 1.4;
  font-weight: 900;
  text-align: right;
  margin: 0;
  ${xsBreak} {
    font-weight: 800;
  }
`;
const titleText = css`
  font-size: 1rem;
  font-style: italic;
  line-height: 1.4;
  font-weight: 300;
  text-align: right;
  margin: 0;
`;
const attributionBox = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1.5rem;
`;
const circularPhoto = css`
  height: 7rem;
  width: 7rem;
  object-fit: cover;
  object-position: 50% 0%;
  margin-left: 1.5rem;
  border-radius: 50%;
  ${xsBreak} {
    height: 5rem;
    width: 5rem;
    object-fit: cover;
    margin-left: 1.25rem;
  }
`;

const QuoteBlock = ({ author, title, photo, children, color }) => {
  return (
    <div
      css={[
        quoteBox,
        css`
          box-shadow: ${colorShadows(color).rightDown};
          border: ${colorBorders(color).box};
        `
      ]}
    >
      <svg
        css={[topRight, markSize]}
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        width="58.1055"
        height="47.0703"
        viewBox="0 0 58.1055 47.0703"
      >
        <path d="M16.9922,0,27.3438,7.0312a46.06,46.06,0,0,0-9.375,26.7579V47.07H0V35.7422A44.79,44.79,0,0,1,4.7363,16.0156,47.294,47.294,0,0,1,16.9922,0ZM47.7539,0,58.1055,7.0312a46.06,46.06,0,0,0-9.375,26.7579V47.07H30.7617V35.7422A44.7969,44.7969,0,0,1,35.498,16.0156,47.294,47.294,0,0,1,47.7539,0Z" />
      </svg>
      <div
        css={css`
          margin: 1.5rem;
        `}
      >
        <h3 css={quoteText}>{children}</h3>
        <div css={attributionBox}>
          <div>
            <p css={authorText}>{author}</p>
            <p css={titleText}>{title}</p>
          </div>
          <img css={circularPhoto} src={photo} alt={author} />
        </div>
      </div>
      <svg
        css={[bottomLeft, markSize]}
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        width="57.2266"
        height="47.8516"
        viewBox="0 0 57.2266 47.8516"
      >
        <path d="M10.2539,47.8516,0,40.82Q9.0821,28.1267,9.375,14.0625V0H27.2461V12.6953a45.1721,45.1721,0,0,1-4.834,19.4824A44.96,44.96,0,0,1,10.2539,47.8516Zm29.9805,0L29.9805,40.82q9.0821-12.6936,9.375-26.7578V0H57.2266V12.6953a45.1736,45.1736,0,0,1-4.834,19.4824A44.96,44.96,0,0,1,40.2344,47.8516Z" />
      </svg>{" "}
    </div>
  );
};

QuoteBlock.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  photo: PropTypes.string,
  color: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any
};

QuoteBlock.defaultProps = {
  color: colors.green.hex
};

export default QuoteBlock;
