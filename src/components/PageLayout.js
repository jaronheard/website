/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Fragment } from "react";
import PropTypes from "prop-types";

import SEO from "./SEO";
import Header from "./Header";
// import Contact from "./Contact";
// import Footer from "./Footer";
import Wrapper from "./Wrapper";
import CommonCTA from "./CommonCTA";
import DividerLine from "./DividerLine";
import { colors } from "../_Theme/UpdatedBrandTheme";

const PageLayout = ({ title, keywords, children }) => {
  return (
    <Fragment>
      <SEO title={`CIVIC${title && `: ${title}`}`} keywords={keywords} />
      <Wrapper>
        <Header />
        {children}
        <CommonCTA />
        <DividerLine
          hexColor={colors.yellow.hex}
          cssStyle={css`
            margin-top: -60px;
          `}
        />
        <div
          className="DividerLinePadding"
          css={css`
            border-top: 10px solid ${colors.yellow.hex};
          `}
        />
        {/* <Contact /> */}
        {/* <Footer /> */}
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
