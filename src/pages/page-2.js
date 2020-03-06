import React from "react";
import { Link } from "gatsby";

import SEO from "../components/SEO";
import Wrapper from "../components/Wrapper";

const SecondPage = () => (
  <Wrapper>
    <SEO title="Page two" />
    <div heroTitle="Civic and Gatsby Starter" heroSubtitle="They play nice!">
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Wrapper>
);

export default SecondPage;
