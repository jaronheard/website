/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

import { colors } from "../../_Theme/UpdatedBrandTheme";
import GridList from "../../components/GridList";

const CivicExperience = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { contentfulContentList } = useStaticQuery(
    graphql`
      query {
        contentfulContentList(contentful_id: { eq: "75qL3zfEQExmQmj76hJXFI" }) {
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
      showDividerLine
      dividerLineColor={colors.green.hex}
      shrinkToColumn
    />
  );
};

export default CivicExperience;
