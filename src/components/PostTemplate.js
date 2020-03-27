import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PageLayout from "./PageLayout";
import Post from "./Post";
import TitleAreaNew from "./TitleAreaNew";
import DefaultTitleAreaContent from "./DefaultTitleAreaContent";
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
          authors {
            name
            email
          }
          createdAt(formatString: "MMMM DD, YYYY")
          updatedAt(formatString: "MMMM DD, YYYY")
        }
      }
    `
  );

  return (
    <PageLayout title={contentfulPost.title}>
      <TitleAreaNew dividerLineColor={colors.blue.hex}>
        <DefaultTitleAreaContent title="Post" />
      </TitleAreaNew>
      <Post
        title={contentfulPost.title}
        content={contentfulPost.content}
        authors={contentfulPost.authors}
        slug={contentfulPost.slug}
        created={contentfulPost.createdAt}
        updated={contentfulPost.updatedAt}
      />
      <DividerLine hexColor={colors.pink.hex} />
    </PageLayout>
  );
};
export default PostTemplate;
