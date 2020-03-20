/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import CallToActionCard from "../../components/CallToActionCard";

const OurDifferenceCards = () => {
  const { contentfulContentList } = useStaticQuery(
    graphql`
      query {
        contentfulContentList(contentful_id: { eq: "3GwkbpioeQXOQPRF0sZNz7" }) {
          content {
            ... on ContentfulCallToActionBlock {
              id
              button
              tagline
              summary {
                json
              }
            }
          }
        }
      }
    `
  );

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(3, auto);
        justify-content: space-around;
        width: 100%;
        margin-top: 80px;

        @media (max-width: 1260px) {
          grid-template-columns: auto;
          justify-content: center;
          align-content: space-between;
          margin-top: 80px;
          grid-row-gap: 50px;
        }
      `}
    >
      {contentfulContentList.content.map(content => (
        <CallToActionCard
          tagline={content.tagline}
          summary={content.summary && content.summary.json}
          button={content.button}
        />
      ))}
    </div>
  );
};

export default OurDifferenceCards;
