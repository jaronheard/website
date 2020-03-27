import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { colors } from "../../_Theme/UpdatedBrandTheme";
import TitleAreaNew from "../../components/TitleAreaNew";
import DefaultTitleAreaContent from "../../components/DefaultTitleAreaContent";

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
    <TitleAreaNew dividerLineColor={colors.purple.hex}>
      <DefaultTitleAreaContent
        subtitle={contentfulHeading.subtitle}
        title={contentfulHeading.title}
        wideContent
      />
    </TitleAreaNew>
  );
};

export default ProjectsHeader;
