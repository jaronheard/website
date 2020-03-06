import React from "react";
import { Link } from "gatsby";

import SEO from "../components/SEO";
import Wrapper from "../components/Wrapper";
import ProjectDetailList from "../components/ProjectDetailList";

const Projects = () => (
  <Wrapper>
    <SEO title="Projects" />
    <div heroTitle="Civic and Gatsby Starter" heroSubtitle="They play nice!">
      <h1>Projects</h1>
      <p>
        <em>These projects are pulled in from Contentful</em>
      </p>
      <ProjectDetailList />
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Wrapper>
);

export default Projects;
