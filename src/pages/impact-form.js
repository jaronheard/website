/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

import PageLayout from "../components/PageLayout";
import TitleAreaNew from "../components/TitleAreaNew";
import DefaultTitleAreaContent from "../components/DefaultTitleAreaContent";
import DividerLine from "../components/DividerLine";
import EmbeddedForm from "../components/EmbeddedForm";
import ContentContainer from "../components/ContentContainer";
import { colors } from "../_Theme/UpdatedBrandTheme";

const ContributorApplication = () => {
  const { contentfulHeading } = useStaticQuery(
    graphql`
      query {
        contentfulHeading(contentful_id: { eq: "5WJr23P4CPrg9IynR3q1Fs" }) {
          id
          title
        }
      }
    `
  );

  return (
    <PageLayout
      title="Apply"
      keywords={[`Civic Software Foundation`, `CIVIC Impact Application`]}
    >
      <TitleAreaNew dividerLineColor={colors.yellow.hex}>
        <DefaultTitleAreaContent title={contentfulHeading.title} />
      </TitleAreaNew>
      <ContentContainer margin="md">
        <EmbeddedForm formSrc="https://form.jotform.com/200788323804153" />
      </ContentContainer>
      <DividerLine hexColor={colors.pink.hex} />
    </PageLayout>
  );
};

export default ContributorApplication;
