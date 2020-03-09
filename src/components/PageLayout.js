/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment } from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";

import SEO from "./SEO";
import Wrapper from "./Wrapper";
import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";
import CommonCTA from "./CommonCTA";

const PageLayout = ({ title, keywords, children }) => {
  return (
    <Fragment>
      <Wrapper>
        <SEO title={`CIVIC${title && `: ${title}`}`} keywords={keywords} />
        <Header />
        <Box mt={8}>{children}</Box>
        <CommonCTA />
        <Contact />
      </Wrapper>
      <Footer />
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
