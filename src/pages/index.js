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
      <DividerLine
        hexColor={colors.purple.hex}
        lineStyle={css`
          margin-bottom: 0;
          height: 100px;
          background-color: white;
        `}
      />
      <div
        css={css`
          background-color: white;
          display: grid;
          justify-content: center;
        `}
      >
        <OurDifferenceHeader />
        <OurDifferenceCards />
      </div>
      <DividerLine hexColor={colors.yellow.hex} swoopUp />
      <CallToActionBlocks />
      <QuoteBlock />
      <DividerLine hexColor={colors.purple.hex} swoopUp />
    </PageLayout>
  );
};

export default IndexPage;
