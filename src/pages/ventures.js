/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Grid } from "@material-ui/core";

import VenturesHeader from "./Ventures/VenturesHeader";
import ContributorBlock from "./Ventures/ContributorBlock";
import PageLayout from "../components/PageLayout";
import EmphasizedCTA from "./Ventures/EmphasizedCTA";

const VenturesPage = () => {
  return (
    <PageLayout title="Ventures">
      <Grid container spacing={0}>
        <VenturesHeader />
        <Grid container xs={12} spacing={4}>
          <ContributorBlock />
        </Grid>
        <Grid container xs={12}>
          <EmphasizedCTA />
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default VenturesPage;
