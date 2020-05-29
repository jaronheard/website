/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import { Fragment } from "react";

import CallToActionBlock from "../../components/CallToActionBlock";
import DividerLine from "../../components/DividerLine";
import { smBreak } from "../../_Theme/UpdatedBrandTheme";

const contentGrid = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 70px;
`;

const colorOrder = ["yellow", "pink"];

const CallToActionBlocks = () => {
  const { contentfulContentList } = useStaticQuery(
    graphql`
      query {
        contentfulContentList(contentful_id: { eq: "3JkQZHYqccY7YiLxXH3CC9" }) {
          content {
            ... on ContentfulCallToActionBlock {
              button
              buttonLocalLink
              tagline
              summary {
                json
              }
            }
          }
          title
          subtitle {
            subtitle
          }
        }
      }
    `
  );

  return (
    <Fragment>
      <div
        css={css`
          max-width: 1100px;
          margin: 0 auto;
          padding: 2.5rem 0 2rem 0;
        `}
      >
        <h2
          css={css`
            margin: 0;
          `}
        >
          {contentfulContentList.title}
        </h2>
        <div
          css={css`
            margin-top: 40px;
          `}
        >
          {contentfulContentList.subtitle.subtitle}
        </div>
        <div css={contentGrid}>
          {contentfulContentList.content.map((content, i) => (
            <CallToActionBlock
              tagline={content.tagline}
              summary={content.summary && content.summary.json}
              button={content.button}
              buttonLocalLink={content.buttonLocalLink}
              buttonColor={colorOrder[i]}
              noDivider
              wrapperCss={css`
                display: inline-grid;
                ${smBreak} {
                  display: grid;
                }
              `}
              pair
            />
          ))}
        </div>
      </div>
      <DividerLine hexColor={colorOrder[1]} />
    </Fragment>
  );
};

export default CallToActionBlocks;
