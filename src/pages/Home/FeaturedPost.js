/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql, Link } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import GridSingle from "../../components/GridSingle";

const FeaturedPost = () => {
  const { contentfulFeaturedPost } = useStaticQuery(
    graphql`
      query {
        contentfulFeaturedPost(location: { eq: "Home" }) {
          id
          post {
            preview {
              json
            }
            slug
          }
        }
      }
    `
  );

  return (
    <GridSingle
      containerStyle={css`
        padding: 0 20px;
      `}
    >
      {documentToReactComponents(contentfulFeaturedPost.post.preview.json)}
      <Link
        to={`posts/${contentfulFeaturedPost.post.slug}`}
        className="btn-pink"
      >
        <p>Learn More</p>
      </Link>
    </GridSingle>
  );
};

export default FeaturedPost;
