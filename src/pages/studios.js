/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Grid } from "@material-ui/core";

import StudiosHeader from "./Studios/StudiosHeader";
import TrioBlock from "./Studios/TrioBlock";
import PageLayout from "../components/PageLayout";
import EmphasizedCTA from "./Ventures/EmphasizedCTA";

const StudiosPage = () => {
  return (
    <PageLayout title="Studios">
      <Grid container spacing={0}>
        <StudiosHeader />
        <Grid container xs={12} spacing={4}>
          <TrioBlock />
        </Grid>
        <Grid container xs={12}>
          <EmphasizedCTA />
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default StudiosPage;
