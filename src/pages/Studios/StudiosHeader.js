import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PageHeading from "../../components/PageHeading";

const PlatformHeader = () => {
  const { allContentfulHeading } = useStaticQuery(
    graphql`
      query {
        allContentfulHeading(
          filter: { contentful_id: { eq: "4SAlDY17XRjY6JHgFsIol" } }
        ) {
          edges {
            node {
              title
              subtitle
            }
          }
        }
      }
    `
  );

  return allContentfulHeading.edges.map(el => (
    <PageHeading title={el.node.title} subtitle={el.node.subtitle} />
  ));
};

export default PlatformHeader;
