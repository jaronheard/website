/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { PropTypes } from "prop-types";
import { Link } from "gatsby";

import { smBreak } from "../_Theme/UpdatedBrandTheme";

const verticalStyle = css`
  grid-template-columns: auto;
  justify-content: center;
  align-content: space-between;
  height: 200px;
  margin-top: 80px;
`;

const CTAButtons = ({ vertical = false }) => (
  <div
    css={css`
      display: grid;
      grid-template-columns: repeat(3, auto);
      margin-top: 165px;
      grid-column-gap: 20px;

      ${smBreak} {
        ${verticalStyle}
      }

      ${vertical ? verticalStyle : ""}
    `}
  >
    <Link
      to="/projects/"
      css={css`
        background-size: 0% 2px !important;
      `}
    >
      <button type="button" className="btn-purple">
        <p>Explore The Platform</p>
      </button>
    </Link>
    <Link
      to="/projects/"
      css={css`
        background-size: 0% 2px !important;
      `}
    >
      <button type="button" className="btn-blue">
        <p>Scale Your Impact</p>
      </button>
    </Link>
    <Link
      to="/projects/"
      css={css`
        background-size: 0% 2px !important;
      `}
    >
      <button type="button" className="btn-green">
        <p>Bring Your Project</p>
      </button>
    </Link>
  </div>
);

CTAButtons.propTypes = {
  vertical: PropTypes.bool
};

export default CTAButtons;
