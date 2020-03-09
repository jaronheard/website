/* eslint-disable react/prop-types */
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Button } from "@hackoregon/ui-core";
import { Grid, Box } from "@material-ui/core";

// https://app.contentful.com/spaces/3j4jpxgb52st/content_types/callToActionBlock/fields

const CallToActionCard = ({ tagline, summary, button, xs, md }) => (
  <Grid item xs={xs || 12} md={md || 4}>
    <Box p={2}>
      {tagline && <h2>{tagline}</h2>}
      {summary && <div>{documentToReactComponents(summary)}</div>}
      {button && <Button>{button}</Button>}
    </Box>
  </Grid>
);

export default CallToActionCard;
