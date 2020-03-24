/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql, Link } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { smBreak, xsBreak } from "../../_Theme/UpdatedBrandTheme";
import SectionHeader from "../../components/SectionHeader";

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
          buttonLocalLink
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
          margin: 0 auto;

          ${smBreak} {
            padding: 0 40px;
          }

          ${xsBreak} {
            padding: 0 20px;
          }
        `}
      >
        <SectionHeader title={contentfulCallToActionBlock.tagline} />
        <p>
          {documentToReactComponents(contentfulCallToActionBlock.summary.json)}
        </p>
        {contentfulCallToActionBlock.button && (
          <Link
            to={`${contentfulCallToActionBlock.buttonLocalLink}`}
            className="btn-green"
            css={css`
              justify-self: end;
              margin-top: 20px;
            `}
          >
            <p>{contentfulCallToActionBlock.button}</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default disciplinesAndRoles;
