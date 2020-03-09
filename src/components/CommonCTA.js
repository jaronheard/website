/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Grid, Box } from "@material-ui/core";
import CTAButtons from "./CTAButtons";

const CommonCTA = () => (
  <Box my={16} textAlign="center">
    <h2>Join the CIVIC Movement</h2>
    <Grid container direction="column" justify="center" alignItems="center">
      <CTAButtons />
    </Grid>
  </Box>
);

export default CommonCTA;
