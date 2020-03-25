/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

import { colors } from "../../_Theme/UpdatedBrandTheme";
import GridList from "../../components/GridList";

const DeSiloExperience = () => {
  const { contentfulContentList } = useStaticQuery(
    graphql`
      query {
        contentfulContentList(contentful_id: { eq: "2su5Nc7QbqZ4trvZgxzK0r" }) {
          title
          subtitle {
            subtitle
          }
          content {
            ... on ContentfulCallToActionBlock {
              id
              summary {
                json
              }
              tagline
            }
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
      colorShadow
      showDividerLine
      dividerLineColor={colors.pink.hex}
    />
  );
};

export default DeSiloExperience;
