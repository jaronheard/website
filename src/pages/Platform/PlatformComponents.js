/* eslint-disable graphql/template-strings */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

import { colors } from "../../_Theme/UpdatedBrandTheme";
import GridList from "../../components/GridList";

const PlatformComponents = () => {
  const { contentfulContentList } = useStaticQuery(
    graphql`
      query {
        contentfulContentList(contentful_id: { eq: "7DqbXnpUlLESjEXI3GEoxN" }) {
          title
          subtitle {
            subtitle
          }
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
        }
      }
    `
  );

  return (
    <div>
      <GridList
        title={contentfulContentList.title}
        subtitle={contentfulContentList.subtitle.subtitle}
        callToActionBlockList={contentfulContentList.content}
        showDividerLine
        dividerLineColor={colors.pink.hex}
        wideContent
        colorShadow
        bottomContent={contentfulContentList.extraContent.json}
        buttonText={contentfulContentList.buttonText}
      />
    </div>
  );
};

export default PlatformComponents;
