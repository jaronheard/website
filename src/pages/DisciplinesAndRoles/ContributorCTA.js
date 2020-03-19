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
          contentful_id: { eq: "21xkawY7SG0sBSVFakqzZU" }
        ) {
          tagline
          summary {
            json
          }
          button
        }
      }
    `
  );

  return (
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
        <h2
          css={css`
            margin-bottom: 85px;

            ${xsBreak} {
              margin-bottom: 30px;
            }
          `}
        >
          {contentfulCallToActionBlock.tagline}
        </h2>
        {documentToReactComponents(contentfulCallToActionBlock.summary.json)}
        <button
          type="button"
          className="btn-green"
          css={css`
            justify-self: end;
            margin-top: 20px;
          `}
        >
          <p>{contentfulCallToActionBlock.button}</p>
        </button>
      </div>
    </div>
  );
};

export default disciplinesAndRoles;
