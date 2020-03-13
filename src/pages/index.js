/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import CallToActionBlocks from "./Home/CallToActionBlocks";
import OurDifferenceCards from "./Home/OurDifferenceCards";
import OurDifferenceHeader from "./Home/OurDifferenceHeader";
import Splash from "./Home/Splash";
import PageLayout from "../components/PageLayout";

const IndexPage = () => {
  return (
    <PageLayout
      title="Home"
      keywords={[`Civic Software Foundation`, `CIVIC Platform`]}
    >
      <Splash />
      <div
        css={css`
          background-color: white;
          display: grid;
        `}
      >
        <OurDifferenceHeader />
        <OurDifferenceCards />
      </div>
      <CallToActionBlocks />
    </PageLayout>
  );
};

export default IndexPage;
