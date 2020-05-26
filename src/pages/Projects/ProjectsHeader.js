import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { colors } from "../../_Theme/UpdatedBrandTheme";
import TitleAreaNew from "../../components/TitleAreaNew";
import DefaultTitleAreaContent from "../../components/DefaultTitleAreaContent";

const ProjectsHeader = () => {
  const { contentfulHeading, contentfulAsset } = useStaticQuery(
    graphql`
      query {
        contentfulHeading(contentful_id: { eq: "7mvVTRyNzrgC3JTb4SdNsT" }) {
          title
          subtitle
        }
        contentfulAsset(title: { eq: "civic-cairo-pattern-3" }) {
          file {
            url
          }
        }
      }
    `
  );

  return (
    <TitleAreaNew
      backgroundImage={`url(https:${contentfulAsset.file.url})`}
      dividerLineColor={colors.purple.hex}
    >
      <DefaultTitleAreaContent
        subtitle={contentfulHeading.subtitle}
        title={contentfulHeading.title}
      />
    </TitleAreaNew>
  );
};

export default ProjectsHeader;
