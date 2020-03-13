/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment } from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";

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
        <Box mt={8}>{children}</Box>
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
