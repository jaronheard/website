/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

import PageLayout from "../components/PageLayout";
import TitleArea from "../components/TitleArea";
import DividerLine from "../components/DividerLine";
import { colors } from "../_Theme/UpdatedBrandTheme";
import Philosophy from "./DisciplinesAndRoles/Philosophy";
import DeSiloExperience from "./DisciplinesAndRoles/DeSiloExperience";
import CivicExperience from "./DisciplinesAndRoles/CivicExperience";
import ContributorCTA from "./DisciplinesAndRoles/ContributorCTA";

const disciplinesAndRoles = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { contentfulHeading } = useStaticQuery(
    graphql`
      query {
        contentfulHeading(contentful_id: { eq: "4NCEgZyiEd8QQnm3njhaw4" }) {
          id
          title
          subtitle
        }
      }
    `
  );

  return (
    <PageLayout
      title={contentfulHeading.title}
      keywords={[`Civic Software Foundation`, `CIVIC Platform`]}
      swoopColor={colors.purple.hex}
      hideCommonCTA
    >
      <TitleArea
        title={contentfulHeading.title}
        subtitle={contentfulHeading.subtitle}
        swooshColor={colors.purple.hex}
      />
      <Philosophy />
      <DividerLine hexColor={colors.blue.hex} />
      <DeSiloExperience />
      <CivicExperience />
      <ContributorCTA />
      <DividerLine hexColor={colors.yellow.hex} />
    </PageLayout>
  );
};

export default disciplinesAndRoles;
