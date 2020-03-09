import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Grid } from "@material-ui/core";
import CallToActionCard from "../../components/CallToActionCard";

const EmphasizedCTA = () => {
  const { allContentfulCallToActionBlock } = useStaticQuery(
    graphql`
      query {
        allContentfulCallToActionBlock(
          filter: { contentful_id: { eq: "1ksfSy1JpxPXRJXZtt9tYh" } }
        ) {
          edges {
            node {
              tagline
              summary {
                json
              }
              button
            }
          }
        }
      }
    `
  );

  return (
    <Grid container xs={12}>
      <Grid item xs={12} md={6} />
      {allContentfulCallToActionBlock.edges.map(el => (
        <CallToActionCard
          tagline={el.node.tagline}
          summary={el.node.summary && el.node.summary.json}
          button={el.node.button}
          md={6}
        />
      ))}
    </Grid>
  );
};

export default EmphasizedCTA;
