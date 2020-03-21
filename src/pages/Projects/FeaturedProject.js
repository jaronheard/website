import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ProjectFeature from "../../components/ProjectFeature";
import GridSingle from "../../components/GridSingle";
import SectionHeader from "../../components/SectionHeader";

const FeaturedProject = () => {
  const { contentfulProjectCollection } = useStaticQuery(
    graphql`
      query {
        contentfulProjectCollection(
          contentful_id: { eq: "5o2QnhNTCkMOJJkxX952r0" }
        ) {
          title
          projects {
            title
            year
            yearEnd
            current
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
            image {
              fluid(maxWidth: 900) {
                srcSet
                sizes
              }
              description
            }
          }
        }
      }
    `
  );

  const project = contentfulProjectCollection.projects[0];

  return (
    <GridSingle>
      <SectionHeader
        title={contentfulProjectCollection.title}
        subtitle={project.title}
      />
      <ProjectFeature
        year={project.year}
        yearEnd={project.yearEnd}
        current={project.current}
        title={project.title}
        summary={project.summary && project.summary.summary}
        partners={project.partners}
        description={project.description && project.description.json}
        program={project.program && project.program.name}
        organizations={project.organizations}
        topics={project.topics}
        projectTypes={project.projectTypes}
        projectUrl={project.projectUrl}
        image={project.image}
      />
    </GridSingle>
  );
};

export default FeaturedProject;
