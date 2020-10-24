/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import { Fragment } from "react";

import SectionHeader from "../../components/SectionHeader";
import GridSingle from "../../components/GridSingle";
import Challenge from "../../components/Challenge";

const Challenges = () => {
  const { allContentfulChallenge, contentfulHeading } = useStaticQuery(
    graphql`
      {
        contentfulHeading(contentful_id: { eq: "3ArSDhlLmIZKwNxNDONjuM" }) {
          title
          summary {
            json
          }
        }
        allContentfulChallenge(
          filter: { completed: { ne: true } }
          sort: { fields: date, order: ASC }
        ) {
          edges {
            node {
              title
              tags
              time
              date
              summary {
                json
              }
              outcomes
              applicants
              completed
              slug
            }
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
        center
      />
      <GridSingle containerStyle="padding: 0 1rem;">
        {allContentfulChallenge.edges.slice(0, 3).map(({ node }) => (
          <Challenge
            title={node.title}
            tags={node.tags}
            time={node.time}
            date={node.date}
            summary={node.summary.json}
            outcomes={node.outcomes}
            applicants={node.applicants}
            slug={node.slug}
          />
        ))}
      </GridSingle>
    </Fragment>
  );
};

export default Challenges;
