/** @jsx jsx */
import { useState } from "react";
import { jsx, css } from "@emotion/core";
import { Link } from "gatsby";
import { Button } from "@hackoregon/ui-core";

import Image from "../components/Image";
import SEO from "../components/SEO";
import Wrapper from "../components/Wrapper";

const IndexPage = () => {
  const [platypus, setPlatypus] = useState("Perry");

  return (
    <Wrapper>
      <SEO
        title="Civic Software Foundation"
        keywords={[`hack oregon`, `civic`, `data`]}
      />
      <div>
        <h1>Slorting Snacks</h1>
        <h2>Are you doing good and want to do gooder?</h2>
        <Button
          onClick={() => setPlatypus(platypus === "Perry" ? "Wilma" : "Perry")}
        >
          Switch!
        </Button>
        <div
          css={css`
            max-width: 300px;
            margin-bottom: 1.45rem;
          `}
        >
          <Image title={platypus} />
        </div>
        <p>
          <em>These platypus images are pulled in from Contentful</em>
        </p>
        <Link to="/projects/">Go to projects</Link>
      </div>
    </Wrapper>
  );
};

export default IndexPage;
