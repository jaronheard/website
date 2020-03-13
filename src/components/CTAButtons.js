/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Fragment } from "react";
import { Link } from "gatsby";

const CTAButtons = () => (
  <Fragment>
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
  </Fragment>
);

export default CTAButtons;
