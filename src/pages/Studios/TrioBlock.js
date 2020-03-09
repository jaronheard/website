import React, { Fragment } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Grid } from "@material-ui/core";
import CallToActionCard from "../../components/CallToActionCard";
import SectionHeader from "../../components/SectionHeader";

const TrioBlock = () => {
  const { allContentfulContentTrio } = useStaticQuery(
    graphql`
      query {
        allContentfulContentTrio(
          filter: { contentful_id: { eq: "5YSkkycc2OSJmXsAE9MA5D" } }
        ) {
          edges {
            node {
              blockTitleA
              blockTitleB
              blockTitleC
              blockSummaryA {
                json
              }
              blockSummaryB {
                json
              }
              blockSummaryC {
                json
              }
              title
              subtitle
            }
          }
        }
      }
    `
  );

  return allContentfulContentTrio.edges.map(el => (
    <Fragment>
      <Grid item xs={12}>
        <SectionHeader title={el.node.title} subtitle={el.node.subtitle} />
      </Grid>
      <CallToActionCard
        tagline={el.node.blockTitleA}
        summary={el.node.blockSummaryA && el.node.blockSummaryA.json}
      />
      <CallToActionCard
        tagline={el.node.blockTitleB}
        summary={el.node.blockSummaryB && el.node.blockSummaryB.json}
      />
      <CallToActionCard
        tagline={el.node.blockTitleC}
        summary={el.node.blockSummaryC && el.node.blockSummaryB.json}
      />
    </Fragment>
  ));
};

export default TrioBlock;
