import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ProjectDetail from "./ProjectDetail";

const ProjectDetailList = () => {
  const { allContentfulProject } = useStaticQuery(
    graphql`
      query {
        allContentfulProject {
          edges {
            node {
              year
              title
              summary {
                summary
              }
              partners
              description {
                json
              }
              program {
                title
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
      program={el.node.program && el.node.program.title}
    />
  ));
};

export default ProjectDetailList;
