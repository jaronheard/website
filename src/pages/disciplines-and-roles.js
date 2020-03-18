/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import PageLayout from "../components/PageLayout";
import TitleArea from "../components/TitleArea";
import DividerLine from "../components/DividerLine";
import scatterplotImage from "../images/scatterplot.png";
import { colors, smBreak } from "../_Theme/UpdatedBrandTheme";
import DeSiloExperience from "./DisciplinesAndRoles/DeSiloExperience";
import CivicExperience from "./DisciplinesAndRoles/CivicExperience";

const disciplinesAndRoles = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { contentfulHeading, contentfulCallToActionBlock } = useStaticQuery(
    graphql`
      query {
        contentfulHeading(contentful_id: { eq: "4NCEgZyiEd8QQnm3njhaw4" }) {
          id
          title
          subtitle
        }
        contentfulCallToActionBlock(
          contentful_id: { eq: "74dAGTiSRBzwL5yXbUuWY0" }
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
      <TitleArea
        imageURL={scatterplotImage}
        imageOpacity={1}
        title={contentfulHeading.title}
        subtitle={contentfulHeading.subtitle}
        swooshColor={colors.green.hex}
      />
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
      <DividerLine hexColor={colors.blue.hex} swoopUp />
      <DeSiloExperience />
      <CivicExperience />
    </PageLayout>
  );
};

export default disciplinesAndRoles;
