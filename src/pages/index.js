/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import PageLayout from "../components/PageLayout";
import Splash from "./Home/Splash";
import OurDifferenceHeader from "./Home/OurDifferenceHeader";
import OurDifferenceCards from "./Home/OurDifferenceCards";
import CallToActionBlocks from "./Home/CallToActionBlocks";
import QuoteBlock from "../components/QuoteBlock";
import DividerLine from "../components/DividerLine";
import ContentContainer from "../components/ContentContainer";
import { colors } from "../_Theme/UpdatedBrandTheme";

const IndexPage = () => {
  return (
    <PageLayout
      title="Home"
      keywords={[`Civic Software Foundation`, `CIVIC Platform`]}
      swoopColor={colors.yellow.hex}
    >
      <Splash />
      <ContentContainer>
        <div
          css={css`
            background-color: white;
            padding: 3rem 0 4rem 0;
          `}
        >
          <OurDifferenceHeader />
          <OurDifferenceCards />
        </div>
        <DividerLine hexColor={colors.yellow.hex} />
        <CallToActionBlocks />
        <div
          css={css`
            background-color: white;
            padding: 3rem 0 4rem 0;
          `}
        >
          <QuoteBlock
            author="Catherine Nikolovski"
            title="Founder of CIVIC"
            photo="https://images.ctfassets.net/3j4jpxgb52st/3RS6cidDNAqJIovgUxZLxV/f17e2a894b5216aeb8b22a10b8be788d/CatNikolovskiHeadshot.jpeg?w=400&q=80&fm=webp&fit=scale&f=top"
          >
            When political will meets public imagination, the technology we can
            create is unlike anything the world has ever seen.
          </QuoteBlock>
        </div>
        <DividerLine hexColor={colors.purple.hex} />
      </ContentContainer>
    </PageLayout>
  );
};

export default IndexPage;
