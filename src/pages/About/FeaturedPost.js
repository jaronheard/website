import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Post from "../../components/Post";

const FeaturedPost = () => {
  const { contentfulPost } = useStaticQuery(
    graphql`
      query {
        contentfulPost(contentful_id: { eq: "6o7J1Bj6ar3N5pspplUGOr" }) {
          title
          content {
            json
          }
        }
      }
    `
  );

  return <Post title={contentfulPost.title} content={contentfulPost.content} />;
};

export default FeaturedPost;
