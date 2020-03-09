/* eslint-disable react/prop-types */
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Button } from "@hackoregon/ui-core";
import { Grid, Box } from "@material-ui/core";

// https://app.contentful.com/spaces/3j4jpxgb52st/content_types/callToActionBlock/fields

const CallToActionBlock = ({ tagline, summary, button, big }) => (
  <Grid item xs={12}>
    <Box p={8}>
      {tagline && <h2 className={big && "h-1"}>{tagline}</h2>}
      {summary && <div>{documentToReactComponents(summary)}</div>}
      {button && <Button>{button}</Button>}
    </Box>
  </Grid>
);

export default CallToActionBlock;
