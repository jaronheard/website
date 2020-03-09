/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Grid, Box } from "@material-ui/core";

import Image from "../../components/Image";
import CTAButtons from "../../components/CTAButtons";

const Splash = () => (
  <Grid container xs={12}>
    <Grid item xs={1} md={4}>
      <Box mt={4} pt={8}>
        <Image
          css={css`
            max-width: 90vw%;
          `}
          title="Ven Graph"
        />
      </Box>
    </Grid>
    <Grid item xs={11} md={8}>
      <Box mt={4} p={8}>
        <h2
          css={css`
            background-color: white;
            outline: 0.25em solid white;
          `}
        >
          Imagine a future where information and technology equitably serve the
          public
        </h2>
        <h3
          css={css`
            background-color: white;
            outline: 0.25em solid white;
          `}
        >
          We&apos;re building teams, technology, and process to get there
          quickly.
        </h3>
        <h3
          css={css`
            background-color: white;
            outline: 0.25em solid white;
          `}
        >
          You can be a part of it.
        </h3>
        <Grid container xs={12} justify="space-around">
          <CTAButtons />
        </Grid>
      </Box>
    </Grid>
  </Grid>
);

export default Splash;
