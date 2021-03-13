/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import ContentContainer from "../../components/ContentContainer";
import GridSingle from "../../components/GridSingle";

const Teaser = () => {
  const { contentfulCallToActionSimple } = useStaticQuery(
    graphql`
      {
        contentfulCallToActionSimple(
          contentful_id: { eq: "4xAM1s3NoGu4eCpkLGBa27" }
        ) {
          buttonHref
          buttonTitle
          summary {
            json
          }
        }
      }
    `
  );

  const { summary, buttonHref, buttonTitle } = contentfulCallToActionSimple;

  return (
    <ContentContainer margin="sm">
      <GridSingle
        containerStyle={css`
          padding: 0 20px;
        `}
      >
        {documentToReactComponents(summary.json)}
        <a
          href={buttonHref}
          className="btn-pink"
          css={css`
            margin-top: 20px;
          `}
        >
          <p>{buttonTitle}</p>
        </a>
      </GridSingle>
    </ContentContainer>
  );
};

export default Teaser;
