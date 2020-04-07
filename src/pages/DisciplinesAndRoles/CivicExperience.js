/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import { Fragment } from "react";

import GridList from "../../components/GridList";
import GridListMap from "../../components/GridListMap";
import SectionHeader from "../../components/SectionHeader";

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
    <Fragment>
      <SectionHeader
        title={contentfulContentList.title}
        subtitle={contentfulContentList.subtitle.subtitle}
        shrinkToColumn
      />
      <GridList shrinkToColumn>
        <GridListMap callToActionBlockList={contentfulContentList.content} />
      </GridList>
    </Fragment>
  );
};

export default CivicExperience;
