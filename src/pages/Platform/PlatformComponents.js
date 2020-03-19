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
      }
    `
  );

  return (
    <GridList
      title={contentfulContentList.title}
      subtitle={contentfulContentList.subtitle.subtitle}
      callToActionBlockList={contentfulContentList.content}
      showDividerLine
      dividerLineColor={colors.pink.hex}
      wideContent
      colorShadow
    />
  );
};

export default PlatformComponents;
