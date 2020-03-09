/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Grid } from "@material-ui/core";

import PlatformHeader from "./Platform/PlatformHeader";
import ContributorBlock from "./Platform/ContributorBlock";
import PageLayout from "../components/PageLayout";

const PlatformPage = () => {
  return (
    <PageLayout title="Platform">
      <Grid container spacing={0}>
        <PlatformHeader />
        <Grid container xs={12} spacing={4}>
          <ContributorBlock />
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default PlatformPage;
