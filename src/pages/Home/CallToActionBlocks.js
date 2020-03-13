import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import CallToActionBlock from "../../components/CallToActionBlock";

const colorOrder = ["yellow", "pink", "green", "blue"];

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
              image {
                description
                fluid(maxWidth: 600) {
                  srcSet
                  sizes
                }
              }
            }
          }
        }
      }
    `
  );

  return allContentfulCallToActionBlock.edges.map((el, i) => (
    <CallToActionBlock
      tagline={el.node.tagline}
      summary={el.node.summary && el.node.summary.json}
      button={el.node.button}
      image={el.node.image}
      reverseLayout={i % 2}
      buttonColor={colorOrder[i]}
      dividerColor={colorOrder[i + 1]}
    />
  ));
};

export default CallToActionBlocks;
