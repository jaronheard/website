import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PageLayout from "./PageLayout";
import Post from "./Post";
import TitleArea from "./TitleArea";
import DividerLine from "./DividerLine";
import { colors } from "../_Theme/UpdatedBrandTheme";

const PostTemplate = () => {
  const { contentfulPost } = useStaticQuery(
    graphql`
      query PostQuery($slug: String) {
        contentfulPost(slug: { eq: $slug }) {
          slug
          title
          content {
            json
          }
        }
      }
    `
  );

  return (
    <PageLayout title={contentfulPost.title}>
      <TitleArea title={contentfulPost.title} />
      <Post title={contentfulPost.title} content={contentfulPost.content} />
      <DividerLine hexColor={colors.pink.hex} swoopUp />
    </PageLayout>
  );
};
export default PostTemplate;
