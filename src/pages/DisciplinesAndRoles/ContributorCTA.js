/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql, Link } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { smBreak, xsBreak } from "../../_Theme/UpdatedBrandTheme";
import SectionHeader from "../../components/SectionHeader";
import GridSingle from "../../components/GridSingle";

const ContributorCTA = () => {
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
    <GridSingle
      containerStyle={css`
        ${smBreak} {
          justify-content: center;
        }
      `}
    >
      <div
        css={css`
          display: grid;

          ${smBreak} {
            padding: 0 40px;
            max-width: 600px;
          }

          ${xsBreak} {
            padding: 0 20px;
          }
        `}
      >
        <SectionHeader title={contentfulCallToActionBlock.tagline} />
        <div
          css={css`
            max-width: 800px;
          `}
        >
          {documentToReactComponents(contentfulCallToActionBlock.summary.json)}
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
    </GridSingle>
  );
};

export default ContributorCTA;
