/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { smBreak, xsBreak } from "../../_Theme/UpdatedBrandTheme";
import GridSingle from "../../components/GridSingle";

const disciplinesAndRoles = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { contentfulCallToActionBlock } = useStaticQuery(
    graphql`
      query {
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
    <GridSingle
      containerStyle={css`
        ${smBreak} {
          justify-content: center;
        }
      `}
    >
      <div
        css={css`
          margin: 4rem 0 3rem 0;
          ${smBreak} {
            padding: 0 40px;
            max-width: 600px;
          }

          ${xsBreak} {
            padding: 0 20px;
          }
        `}
      >
        <h2>{contentfulCallToActionBlock.tagline}</h2>
        <div
          css={css`
            max-width: 800px;
          `}
        >
          {documentToReactComponents(contentfulCallToActionBlock.summary.json)}
        </div>
      </div>
    </GridSingle>
  );
};

export default disciplinesAndRoles;
