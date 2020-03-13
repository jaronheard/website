/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Grid, Box } from "@material-ui/core";
import { MaterialTheme } from "@hackoregon/ui-themes";

import pathsImg from "../../images/paths.png";
import DividerLine from "../../components/DividerLine";
import CTAButtons from "../../components/CTAButtons";

const mdBreak = MaterialTheme.breakpoints.up("md");
const acrossMedUp = css`
  ${mdBreak} {
    display: inline-flex;
  }
`;

const Splash = () => (
  <Grid container xs={12}>
    <Grid
      item
      xs={12}
      css={css`
        overflow: hidden;
      `}
    >
      <img
        src={pathsImg}
        alt=""
        css={css`
          position: absolute;
          width: 100%;
          z-index: -1;
          opacity: 0.2;
        `}
      />
      <Box my={16} p={8} textAlign="center">
        <h2>
          Imagine a future where information and technology equitably serve the
          public
        </h2>
        <Box mt={4}>
          <Grid container xs={12}>
            <Grid item md={3} />
            <Grid item md={6} xs={12} justify="space-around" css={acrossMedUp}>
              <CTAButtons />
            </Grid>
            <Grid item md={3} />
          </Grid>
        </Box>
      </Box>
    </Grid>
    <DividerLine hexColor="#721D7C" />
  </Grid>
);

export default Splash;
