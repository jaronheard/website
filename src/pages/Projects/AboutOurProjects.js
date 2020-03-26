import React, { Fragment } from "react";
import { useStaticQuery, graphql } from "gatsby";
import SectionHeader from "../../components/SectionHeader";
import ShadowBox from "../../components/ShadowBox";
import GridList from "../../components/GridList";

const AboutOurProjectsHeader = () => {
  const {
    contentfulHeading,
    allContentfulOrganization,
    allContentfulProjectType,
    allContentfulTopic
  } = useStaticQuery(
    graphql`
      query {
        contentfulHeading(contentful_id: { eq: "5lZ06TEYAEqfNfCpwPOAcR" }) {
          subtitle
          title
          summary {
            json
          }
        }
        allContentfulProjectType {
          edges {
            node {
              name
            }
          }
        }
        allContentfulOrganization {
          edges {
            node {
              name
            }
          }
        }
        allContentfulTopic {
          edges {
            node {
              name
            }
          }
        }
      }
    `
  );

  const organizationCount = allContentfulOrganization.edges.length;
  const projectTypeCount = allContentfulProjectType.edges.length;
  const topicCount = allContentfulTopic.edges.length;

  const subtitle = `Over ${organizationCount} organizations, ${topicCount} topics, and ${projectTypeCount} project types.`;

  return (
    <Fragment>
      <SectionHeader
        title={contentfulHeading.title}
        subtitle={subtitle}
        summary={contentfulHeading.summary.json}
        shrinkToColumn
      />
      <GridList shrinkToColumn>
        <ShadowBox title="Organizations:">
          <ul>
            {allContentfulOrganization.edges.map(({ node }) => (
              <li>{node.name}</li>
            ))}
          </ul>
        </ShadowBox>
        <ShadowBox title="Topics:">
          <ul>
            {allContentfulTopic.edges.map(({ node }) => (
              <li>{node.name}</li>
            ))}
          </ul>
        </ShadowBox>
        <ShadowBox title="Project Types:">
          <ul>
            {allContentfulProjectType.edges.map(({ node }) => (
              <li>{node.name}</li>
            ))}
          </ul>
        </ShadowBox>
      </GridList>
    </Fragment>
  );
};

export default AboutOurProjectsHeader;
