/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import PageLayout from "../components/PageLayout";
import Splash from "./Home/Splash";
import OurDifferenceHeader from "./Home/OurDifferenceHeader";
import OurDifferenceCards from "./Home/OurDifferenceCards";
import CallToActionBlocks from "./Home/CallToActionBlocks";
import QuoteBlock from "./Home/QuoteBlock";
import DividerLine from "../components/DividerLine";
import { colors } from "../_Theme/UpdatedBrandTheme";

const IndexPage = () => {
  return (
    <PageLayout
      title="Home"
      keywords={[`Civic Software Foundation`, `CIVIC Platform`]}
    >
      <Splash />
      <DividerLine hexColor={colors.purple.hex} />
      <div className="DividerLinePadding" />
      <div
        css={css`
          background-color: white;
          display: grid;
          margin-top: -80px;
          justify-content: center;
        `}
      >
        <OurDifferenceHeader />
        <OurDifferenceCards />
      </div>
      <DividerLine
        hexColor={colors.yellow.hex}
        cssStyle={css`
          margin-top: -60px;
          transform: rotate(10deg);
          margin-left: -14px;
        `}
      />
      <div
        className="DividerLinePadding"
        css={css`
          border-top: 10px solid ${colors.yellow.hex};
        `}
      />
      <CallToActionBlocks />
      <QuoteBlock />
      <DividerLine
        hexColor={colors.purple.hex}
        cssStyle={css`
          margin-top: -60px;
          transform: rotate(10deg);
          margin-left: -14px;
        `}
      />
      <div
        className="DividerLinePadding"
        css={css`
          border-top: 10px solid ${colors.purple.hex};
        `}
      />
    </PageLayout>
  );
};

export default IndexPage;
