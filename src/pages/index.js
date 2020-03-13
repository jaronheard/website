/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import PageLayout from "../components/PageLayout";
import Splash from "./Home/Splash";
import OurDifferenceHeader from "./Home/OurDifferenceHeader";
import OurDifferenceCards from "./Home/OurDifferenceCards";
import CallToActionBlocks from "./Home/CallToActionBlocks";
import DividerLine from "../components/DividerLine";
import { smBreak, mdBreak, colors } from "../_Theme/UpdatedBrandTheme";

const dividerLineStyle = css`
  ${smBreak} {
    display: none;
  }
`;

const dividerLinePadding = css`
  border-top: 10px solid ${colors.purple.hex};
  height: 130px;
  background-color: white;
  margin-top: 100px;

  ${mdBreak} {
    display: none;
  }
`;

const IndexPage = () => {
  return (
    <PageLayout
      title="Home"
      keywords={[`Civic Software Foundation`, `CIVIC Platform`]}
    >
      <Splash />
      <DividerLine hexColor={colors.purple.hex} cssStyle={dividerLineStyle} />
      <div css={dividerLinePadding} />
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
          ${dividerLineStyle}
          margin-top: -60px;
          transform: rotate(10deg);
          margin-left: -14px;
        `}
      />
      <div
        css={css`
          ${dividerLinePadding}
          border-top: 10px solid ${colors.yellow.hex};
        `}
      />
      <CallToActionBlocks />
    </PageLayout>
  );
};

export default IndexPage;
