/* eslint-disable graphql/template-strings */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

import { colors } from "../../_Theme/UpdatedBrandTheme";
import GridList from "../../components/GridList";
import SectionHeader from "../../components/SectionHeader";
import GridSingle from "../../components/GridSingle";
import DividerLine from "../../components/DividerLine";

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
    <div>
      <GridSingle>
        <SectionHeader
          title={contentfulHeading.title}
          summary={contentfulHeading.summary.json}
        />
      </GridSingle>
      <GridList
        callToActionBlockList={contentfulContentList.content}
        wideContent
        colorShadow
        bottomContent={contentfulContentList.extraContent.json}
        buttonText={contentfulContentList.buttonText}
        buttonLocalLink={contentfulContentList.buttonLink}
      />
      <DividerLine hexColor={colors.yellow.hex} swoopUp />
    </div>
  );
};

export default PlatformComponents;
