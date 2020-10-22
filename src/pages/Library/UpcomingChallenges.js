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
        allContentfulChallenge(filter: { completed: { eq: false } }) {
          edges {
            node {
              title
              tags
              time
              date
              summary
              outcomes
              applicants
              completed
              link
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
      <GridSingle wideContent>
        {allContentfulChallenge.edges.map(({ node }) => (
          <Challenge
            title={node.title}
            tags={node.tags}
            time={node.time}
            date={node.date}
            summary={node.summary}
            outcomes={node.outcomes}
            applicants={node.applicants}
            link={node.link}
          />
        ))}
      </GridSingle>
    </Fragment>
  );
};

export default Challenges;
