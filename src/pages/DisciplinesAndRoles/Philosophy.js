/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { smBreak, xsBreak } from "../../_Theme/UpdatedBrandTheme";

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
    <div
      css={css`
        width: 100%;
        background-color: white;
      `}
    >
      <div
        css={css`
          max-width: 600px;
          display: grid;
          justify-items: center;
          margin: 0 auto;

          ${smBreak} {
            padding: 0 40px;
          }

          ${xsBreak} {
            padding: 0 20px;
          }
        `}
      >
        <h2>{contentfulCallToActionBlock.tagline}</h2>
        <p>
          {documentToReactComponents(contentfulCallToActionBlock.summary.json)}
        </p>
      </div>
    </div>
  );
};

export default disciplinesAndRoles;
