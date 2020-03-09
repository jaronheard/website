/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Grid } from "@material-ui/core";

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
      <Grid container spacing={0}>
        <Splash />
        <Grid container xs={12} spacing={4}>
          <Grid item xs={12}>
            <OurDifferenceHeader />
          </Grid>
          <OurDifferenceCards />
        </Grid>
        <Grid container xs={12}>
          <CallToActionBlocks />
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default IndexPage;
