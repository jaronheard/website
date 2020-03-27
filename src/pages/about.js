/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import PageLayout from "../components/PageLayout";
import TitleAreaNew from "../components/TitleAreaNew";
import DefaultTitleAreaContent from "../components/DefaultTitleAreaContent";
import DividerLine from "../components/DividerLine";
import ContentContainer from "../components/ContentContainer";
// import hackOregonTeam from "../images/team.png";
import { colors, smBreak } from "../_Theme/UpdatedBrandTheme";
import Staff from "./About/Staff";
import FeaturedPost from "./About/FeaturedPost";

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
        <div
          css={css`
            width: 100%;
            background-color: white;
            padding-top: 100px;
            ${smBreak} {
              padding-top: 0;
            }
          `}
        >
          <div
            css={css`
              width: 600px;
              display: grid;
              justify-items: center;
              margin: 0 auto;
            `}
          >
            <h2>{contentfulCallToActionBlock.tagline}</h2>
            <p>
              {documentToReactComponents(
                contentfulCallToActionBlock.summary.json
              )}
            </p>
          </div>
        </div>
        <DividerLine hexColor={colors.pink.hex} />
        <Staff />
        <DividerLine hexColor={colors.blue.hex} />
      </ContentContainer>
    </PageLayout>
  );
};

export default about;
