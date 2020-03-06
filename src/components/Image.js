import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

const Image = ({ title }) => {
  const { allContentfulAsset } = useStaticQuery(
    graphql`
      query {
        allContentfulAsset {
          edges {
            node {
              title
              description
              fluid(maxWidth: 300) {
                srcSet
                sizes
              }
            }
          }
        }
      }
    `
  );

  const img = allContentfulAsset.edges.find(n => {
    return n.node.title.includes(title);
  });

  return (
    img && (
      <img
        srcSet={img.node.fluid.srcSet}
        sizes={img.node.fluid.sizes}
        alt={img.node.title}
      />
    )
  );
};

Image.propTypes = {
  title: PropTypes.string
};

export default Image;
