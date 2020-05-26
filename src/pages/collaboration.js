/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

import PageLayout from "../components/PageLayout";
import TitleAreaNew from "../components/TitleAreaNew";
import DefaultTitleAreaContent from "../components/DefaultTitleAreaContent";
import DividerLine from "../components/DividerLine";
import ContentContainer from "../components/ContentContainer";
import { colors } from "../_Theme/UpdatedBrandTheme";
import Philosophy from "./Collaboration/Philosophy";
import DeSiloExperience from "./Collaboration/DeSiloExperience";
import CivicExperience from "./Collaboration/CivicExperience";
import ContributorCTA from "./Collaboration/ContributorCTA";

const collaboration = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { contentfulHeading, contentfulAsset } = useStaticQuery(
    graphql`
      query {
        contentfulHeading(contentful_id: { eq: "4NCEgZyiEd8QQnm3njhaw4" }) {
          id
          title
          subtitle
        }
        contentfulAsset(title: { eq: "civic-cairo-pattern-4" }) {
          file {
            url
          }
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
      <TitleAreaNew
        dividerLineColor={colors.purple.hex}
        backgroundImage={`url(https:${contentfulAsset.file.url})`}
      >
        <DefaultTitleAreaContent
          subtitle={contentfulHeading.subtitle}
          title={contentfulHeading.title}
        />
      </TitleAreaNew>
      <ContentContainer margin="md">
        <Philosophy />
      </ContentContainer>
      <DividerLine hexColor={colors.blue.hex} />
      <ContentContainer margin="md">
        <DeSiloExperience />
      </ContentContainer>
      <DividerLine hexColor={colors.pink.hex} />
      <ContentContainer margin="md">
        <CivicExperience />
      </ContentContainer>
      <DividerLine hexColor={colors.green.hex} />
      <ContentContainer margin="md">
        <ContributorCTA />
      </ContentContainer>
      <DividerLine hexColor={colors.yellow.hex} />
    </PageLayout>
  );
};

export default collaboration;
