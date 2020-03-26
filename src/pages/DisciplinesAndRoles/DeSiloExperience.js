/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import { Fragment } from "react";

import { colors } from "../../_Theme/UpdatedBrandTheme";
import GridList from "../../components/GridList";
import GridListMap from "../../components/GridListMap";
import SectionHeader from "../../components/SectionHeader";

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
    <Fragment>
      <SectionHeader
        title={contentfulContentList.title}
        subtitle={contentfulContentList.subtitle.subtitle}
      />
      <GridList showDividerLine dividerLineColor={colors.pink.hex}>
        <GridListMap
          callToActionBlockList={contentfulContentList.content}
          colorShadow
        />
      </GridList>
    </Fragment>
  );
};

export default DeSiloExperience;
