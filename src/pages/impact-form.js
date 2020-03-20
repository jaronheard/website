/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

import PageLayout from "../components/PageLayout";
import TitleArea from "../components/TitleArea";
import DividerLine from "../components/DividerLine";
import hackOregonTeam from "../images/team.png";
import EmbeddedForm from "../components/EmbeddedForm";
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
      <TitleArea
        imageURL={hackOregonTeam}
        imageOpacity={0.2}
        title={contentfulHeading.title}
        swooshColor={colors.yellow.hex}
      />
      <EmbeddedForm formSrc="https://form.jotform.com/200788323804153" />
      <DividerLine hexColor={colors.pink.hex} swoopUp />
    </PageLayout>
  );
};

export default ContributorApplication;
