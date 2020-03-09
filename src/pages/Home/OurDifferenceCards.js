import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import CallToActionCard from "../../components/CallToActionCard";

const OurDifferenceCards = () => {
  const { allContentfulCallToActionBlock } = useStaticQuery(
    graphql`
      query {
        allContentfulCallToActionBlock(
          filter: { ourDifferencePosition: { gte: 1, lte: 3 } }
          sort: { fields: ourDifferencePosition, order: ASC }
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

  return allContentfulCallToActionBlock.edges.map(el => (
    <CallToActionCard
      tagline={el.node.tagline}
      summary={el.node.summary && el.node.summary.json}
      button={el.node.button}
    />
  ));
};

export default OurDifferenceCards;
