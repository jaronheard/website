import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ProjectDetail from "./ProjectDetail";

const ProjectDetailList = () => {
  const { allContentfulProject } = useStaticQuery(
    graphql`
      {
        allContentfulProject {
          edges {
            node {
              year
              yearEnd
              current
              title
              projectUrl
              summary {
                summary
              }
              description {
                json
              }
              program {
                name
              }
              organizations {
                name
              }
              topics {
                name
              }
              projectTypes {
                name
              }
            }
          }
        }
      }
    `
  );

  return allContentfulProject.edges.map(({ node }) => (
    <ProjectDetail
      year={node.year}
      yearEnd={node.yearEnd}
      current={node.current}
      title={node.title}
      summary={node.summary && node.summary.summary}
      partners={node.partners}
      description={node.description && node.description.json}
      program={node.program && node.program.name}
      organizations={node.organizations}
      topics={node.topics}
      projectTypes={node.projectTypes}
      projectUrl={node.projectUrl}
    />
  ));
};

export default ProjectDetailList;
