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
`;

const CTAButtons = ({ vertical = false }) => (
  <div
    css={css`
      display: grid;
      grid-template-columns: repeat(3, auto);
      grid-column-gap: 20px;

      ${smBreak} {
        ${verticalStyle}
      }

      ${vertical ? verticalStyle : ""}
    `}
  >
    <Link to="/platform/" className="btn-purple">
      <p>CIVIC Platform</p>
    </Link>

    <a href="/project-form/" className="btn-blue">
      <p>Bring Your Project</p>
    </a>

    <a href="/impact-form/" className="btn-green">
      <p>Scale Your Impact</p>
    </a>
  </div>
);

CTAButtons.propTypes = {
  vertical: PropTypes.bool
};

export default CTAButtons;
