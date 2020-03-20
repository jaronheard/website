/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import JotformEmbed from "react-jotform-embed";
import { useStaticQuery, graphql } from "gatsby";

import PageLayout from "../components/PageLayout";
import TitleArea from "../components/TitleArea";
import DividerLine from "../components/DividerLine";
import hackOregonTeam from "../images/team.png";
import { colors, xsBreak, smBreak } from "../_Theme/UpdatedBrandTheme";

const ContributorApplication = () => {
  const { contentfulHeading } = useStaticQuery(
    graphql`
      query {
        contentfulHeading(contentful_id: { eq: "MEKrVhiC7uZ8YSQJ429IC" }) {
          id
          title
        }
      }
    `
  );

  return (
    <PageLayout
      title="Apply"
      keywords={[
        `Civic Software Foundation`,
        `CIVIC Volunteer Application`,
        `CIVIC Contributor Application`
      ]}
    >
      <TitleArea
        imageURL={hackOregonTeam}
        imageOpacity={0.2}
        title={contentfulHeading.title}
        swooshColor={colors.yellow.hex}
      />
      <div
        css={css`
          .formFooter * {
            display: none;
          }
          ${smBreak} {
            margin-top: -50px;
          }
          ${xsBreak} {
            margin-top: -90px;
          }
        `}
      >
        <JotformEmbed src="https://form.jotform.com/200786890019057" />
      </div>
      <DividerLine hexColor={colors.pink.hex} swoopUp />
    </PageLayout>
  );
};

export default ContributorApplication;
