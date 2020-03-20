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
              title
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

  return allContentfulProject.edges.map(el => (
    <ProjectDetail
      year={el.node.year}
      title={el.node.title}
      summary={el.node.summary && el.node.summary.summary}
      partners={el.node.partners}
      description={el.node.description && el.node.description.json}
      program={el.node.program && el.node.program.name}
      organizations={el.node.organizations}
      topics={el.node.topics}
      projectTypes={el.node.projectTypes}
    />
  ));
};

export default ProjectDetailList;
