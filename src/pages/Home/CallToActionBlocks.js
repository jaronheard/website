import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import CallToActionBlock from "../../components/CallToActionBlock";

const CallToActionBlocks = () => {
  const { allContentfulCallToActionBlock } = useStaticQuery(
    graphql`
      query {
        allContentfulCallToActionBlock(
          filter: { homePagePosition: { gte: 1, lte: 3 } }
          sort: { fields: homePagePosition, order: ASC }
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
    <CallToActionBlock
      tagline={el.node.tagline}
      summary={el.node.summary && el.node.summary.json}
      button={el.node.button}
    />
  ));
};

export default CallToActionBlocks;
