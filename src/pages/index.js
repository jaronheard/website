/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "gatsby";
import { Button } from "@hackoregon/ui-core";

import Image from "../components/Image";
import SEO from "../components/SEO";
import Wrapper from "../components/Wrapper";

const IndexPage = () => (
  <Wrapper>
    <SEO title="Home" keywords={[`gatsby`, `civic`, `react`]} />
    <div heroTitle="Civic and Gatsby Starter" heroSubtitle="They play nice!">
      <h1>Civic and Gatsby Starter</h1>
      <h2>They play nice!</h2>
      <p>
        No tweaks needed with{" "}
        <a href="https://www.npmjs.com/package/@hackoregon/ui-core">
          @hackoregon/ui-core
        </a>{" "}
        ! You can even import the global styles and get all the styling.
      </p>
      <p>Now go build something great.</p>
      <Button
        onClick={() =>
          // eslint-disable-next-line no-alert
          window.alert(
            `✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨`
          )
        }
      >
        Sparkles!
      </Button>
      <div
        css={css`
          max-width: 300px;
          margin-bottom: 1.45rem;
        `}
      >
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Wrapper>
);

export default IndexPage;
