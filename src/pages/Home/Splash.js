/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Grid, Box } from "@material-ui/core";

import pathsImg from "../../images/paths.png";

import DividerLine from "../../components/DividerLine";
import CTAButtons from "../../components/CTAButtons";

const Splash = () => (
  <Grid container xs={12}>
    <Grid
      item
      xs={11}
      md={8}
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
    <DividerLine />
  </Grid>
);

export default Splash;
