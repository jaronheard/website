import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { colors } from "../../_Theme/UpdatedBrandTheme";
import TitleArea from "../../components/TitleArea";

const ProjectsHeader = () => {
  const { contentfulHeading } = useStaticQuery(
    graphql`
      query {
        contentfulHeading(contentful_id: { eq: "7mvVTRyNzrgC3JTb4SdNsT" }) {
          title
          subtitle
        }
      }
    `
  );

  return (
    <TitleArea
      title={contentfulHeading.title}
      subtitle={contentfulHeading.subtitle}
      swooshColor={colors.purple.hex}
    />
  );
};

export default ProjectsHeader;
