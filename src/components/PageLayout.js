/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment } from "react";
import PropTypes from "prop-types";

import SEO from "./SEO";
import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";
import Wrapper from "./Wrapper";
import CommonCTA from "./CommonCTA";

const PageLayout = ({ title, keywords, children }) => {
  return (
    <Fragment>
      <SEO title={`CIVIC${title && `: ${title}`}`} keywords={keywords} />
      <Wrapper>
        <Header />
        {children}
        <CommonCTA />
        <Contact />
        <Footer />
      </Wrapper>
    </Fragment>
  );
};

PageLayout.propTypes = {
  title: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default PageLayout;
