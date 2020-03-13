/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "gatsby";

import { smBreak } from "../_Theme/UpdatedBrandTheme";

const CTAButtons = () => (
  <div
    css={css`
      display: grid;
      grid-template-columns: repeat(3, auto);
      margin-top: 165px;
      grid-column-gap: 20px;

      ${smBreak} {
        grid-template-columns: auto;
        justify-content: center;
        align-content: space-between;
        height: 200px;
        margin-top: 80px;
      }
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

export default CTAButtons;
