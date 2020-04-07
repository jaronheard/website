/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

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
    <div
      css={css`
        margin: 4rem 0 3rem 0;
      `}
    >
      <SectionHeader
        title={contentfulHeading.title}
        summary={contentfulHeading.summary.json}
        shrinkToColumn
      />
      <GridList shrinkToColumn>
        <GridListMap
          callToActionBlockList={contentfulContentList.content}
          colorShadow
        />
      </GridList>
    </div>
  );
};

export default DeSiloExperience;
