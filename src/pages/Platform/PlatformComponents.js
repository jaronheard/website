/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

import { xsBreak } from "../../_Theme/UpdatedBrandTheme";
import GridList from "../../components/GridList";
import GridListMap from "../../components/GridListMap";
import SectionHeader from "../../components/SectionHeader";

const PlatformComponents = () => {
  const { contentfulContentList, contentfulHeading } = useStaticQuery(
    graphql`
      query {
        contentfulContentList(contentful_id: { eq: "7DqbXnpUlLESjEXI3GEoxN" }) {
          content {
            ... on ContentfulCallToActionBlock {
              summary {
                json
              }
              extraContent {
                json
              }
              extraContentType
              tagline
            }
          }
          extraContent {
            json
          }
          buttonText
          buttonLink
        }
        contentfulHeading(contentful_id: { eq: "4WxH55d5Hyk9bZtNc4lA9N" }) {
          title
          summary {
            json
          }
        }
      }
    `
  );

  return (
    <div
      css={css`
        ${xsBreak} {
          justify-items: center;
        }
      `}
    >
      <SectionHeader
        title={contentfulHeading.title}
        summary={contentfulHeading.summary.json}
        center
      />
      <GridList
        wideContent
        bottomContent={contentfulContentList.extraContent.json}
        buttonText={contentfulContentList.buttonText}
        buttonLocalLink={contentfulContentList.buttonLink}
      >
        <GridListMap
          callToActionBlockList={contentfulContentList.content}
          colorShadow
          wideContent
        />
      </GridList>
    </div>
  );
};

export default PlatformComponents;
