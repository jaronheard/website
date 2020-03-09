/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Box, Grid } from "@material-ui/core";

const PageHeading = ({ title, subtitle, summary }) => (
  <Grid container xs={12}>
    <Grid container xs={12}>
      <Grid item xs={12} md={8}>
        <Box p={2}>{subtitle && <h2 className="h-2">{subtitle}</h2>}</Box>
      </Grid>
    </Grid>
    <Grid container xs={12}>
      <Grid item xs={12} md={12} justify="flex-end">
        <Box p={2} textAlign="right">
          {title && (
            <h1
              className="h-1"
              css={css`
                margin-top: 4em;
              `}
            >
              {title}
            </h1>
          )}
        </Box>
      </Grid>
    </Grid>
    <Box>{summary && <div>{documentToReactComponents(summary)}</div>}</Box>
  </Grid>
);

export default PageHeading;
