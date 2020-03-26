/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment } from "react";
import PropTypes from "prop-types";

import SEO from "./SEO";
import Header from "./Header";
import Footer from "./Footer";
import Wrapper from "./Wrapper";
import CommonCTA from "./CommonCTA";
import DividerLine from "./DividerLine";
import KeepInTheLoop from "./KeepInTheLoop";

const PageLayout = ({
  title,
  keywords,
  children,
  hideCommonCTA,
  swoopColor
}) => {
  return (
    <Fragment>
      <SEO title={title} keywords={keywords} />
      <Wrapper>
        <Header />
        {children}
        {!hideCommonCTA && (
          <Fragment>
            <CommonCTA />
            <DividerLine hexColor={swoopColor} />
          </Fragment>
        )}
        <KeepInTheLoop />
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
  ]),
  hideCommonCTA: PropTypes.bool,
  swoopColor: PropTypes.string
};

export default PageLayout;
