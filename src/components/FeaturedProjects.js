import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import GridTrio from "./GridTrio";
import ProjectCard from "./ProjectCard";
import { colors } from "../_Theme/UpdatedBrandTheme";

const FeaturedProjects = () => {
  const { contentfulProjectCollection } = useStaticQuery(
    graphql`
      query {
        contentfulProjectCollection(
          contentful_id: { eq: "2nTNJtpwRA4SKi1kOdHDr1" }
        ) {
          title
          projects {
            title
            partners
            summary {
              summary
            }
            year
            yearEnd
            current
          }
        }
      }
    `
  );

  return (
    <GridTrio
      title={contentfulProjectCollection.title}
      showDividerLine
      dividerLineColor={colors.yellow.hex}
    >
      {contentfulProjectCollection.projects.map(project => (
        <ProjectCard
          title={project.title}
          summary={project.summary.summary}
          partners={project.partners || ["CIVIC"]}
          year={project.year}
          yearEnd={project.yearEnd}
          current={project.current}
        />
      ))}
    </GridTrio>
  );
};

export default FeaturedProjects;
