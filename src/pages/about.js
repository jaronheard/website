/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

import PageLayout from "../components/PageLayout";
import TitleAreaNew from "../components/TitleAreaNew";
import DefaultTitleAreaContent from "../components/DefaultTitleAreaContent";
import DividerLine from "../components/DividerLine";
import ContentContainer from "../components/ContentContainer";
// import hackOregonTeam from "../images/team.png";
import { colors } from "../_Theme/UpdatedBrandTheme";
import Staff from "./About/Staff";
import FeaturedPost from "./About/FeaturedPost";
import Organization from "./About/Organization";

const about = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { contentfulHeading, contentfulCallToActionBlock } = useStaticQuery(
    graphql`
      query {
        contentfulHeading(contentful_id: { eq: "29hwKSc4FX6b1sM8ydG5EX" }) {
          id
          title
          subtitle
        }
        contentfulCallToActionBlock(
          contentful_id: { eq: "3crcjqHYZc2g6Avzs4xENL" }
        ) {
          tagline
          summary {
            json
          }
        }
      }
    `
  );

  return (
    <PageLayout
      title={contentfulHeading.title}
      keywords={[`Civic Software Foundation`, `CIVIC Platform`]}
    >
      {/* TODO: Add back team pic */}
      <TitleAreaNew dividerLineColor={colors.green.hex}>
        <DefaultTitleAreaContent
          subtitle={contentfulHeading.subtitle}
          title={contentfulHeading.title}
        />
      </TitleAreaNew>
      <ContentContainer>
        <FeaturedPost />
        <DividerLine hexColor={colors.blue.hex} />
        <Organization
          contentfulCallToActionBlock={contentfulCallToActionBlock}
        />
        <DividerLine hexColor={colors.pink.hex} />
        <Staff />
        <DividerLine hexColor={colors.blue.hex} />
      </ContentContainer>
    </PageLayout>
  );
};

export default about;
