/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import { Fragment } from "react";

import { colors } from "../../_Theme/UpdatedBrandTheme";
import GridList from "../../components/GridList";
import GridListMap from "../../components/GridListMap";
import SectionHeader from "../../components/SectionHeader";

const DeSiloExperience = () => {
  const { contentfulContentList, contentfulHeading } = useStaticQuery(
    graphql`
      query {
        contentfulContentList(contentful_id: { eq: "2su5Nc7QbqZ4trvZgxzK0r" }) {
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
        contentfulHeading(contentful_id: { eq: "5iSEmMbxPa1br7iEXOn7TM" }) {
          title
          summary {
            json
          }
        }
      }
    `
  );
  return (
    <Fragment>
      <SectionHeader
        title={contentfulHeading.title}
        summary={contentfulHeading.summary.json}
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
