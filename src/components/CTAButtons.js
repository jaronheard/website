/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Fragment } from "react";
import { Link } from "gatsby";
import { Button } from "@hackoregon/ui-core";

const CTAButtons = () => (
  <Fragment>
    <Link
      to="/projects/"
      css={css`
        background-size: 0% 2px !important;
      `}
    >
      <Button>Explore The Platform</Button>
    </Link>
    <Link
      to="/projects/"
      css={css`
        background-size: 0% 2px !important;
      `}
    >
      <Button>Scale Your Impact</Button>
    </Link>
    <Link
      to="/projects/"
      css={css`
        background-size: 0% 2px !important;
      `}
    >
      <Button>Bring Your Project</Button>
    </Link>
  </Fragment>
);

export default CTAButtons;
