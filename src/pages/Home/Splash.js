/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import { Logo } from "@hackoregon/ui-brand";

import { smBreak } from "../../_Theme/UpdatedBrandTheme";
import GridSingle from "../../components/GridSingle";
import TitleAreaNew from "../../components/TitleAreaNew";

const Splash = () => {
  const { contentfulAsset, contentfulHeading } = useStaticQuery(graphql`
    query {
      contentfulAsset(title: { eq: "civic-cairo-pattern" }) {
        file {
          url
        }
      }
      contentfulHeading(contentful_id: { eq: "3Hy2d9lrRRmragYcOSoDl3" }) {
        subtitle
        title
      }
    }
  `);

  return (
    <TitleAreaNew backgroundImage={`url(https:${contentfulAsset.file.url})`}>
      <GridSingle
        containerStyle={css`
          width: 100%;
          padding: 0;
        `}
      >
        <h2
          css={css`
            max-width: 650px;
            display: grid;
            justify-self: left;
            font-weight: 700;
            line-height: 1.15;
            ${smBreak} {
              max-width: 4000px;
            }
          `}
        >
          <div>
            <span
              css={css`
                line-height: 1.4;
                letter-spacing: 0.1rem;
              `}
            >
              <Logo
                type="squareLogo"
                css={css`
                  height: 40px !important;
                  top: 10px !important;
                  margin-right: 10px !important;
                  position: relative;
                `}
              />
              {contentfulHeading.title}
            </span>
          </div>
        </h2>
        <h3
          css={css`
            max-width: 600px;
            display: grid;
            margin: 0;
            justify-self: left;
            align-self: end;
            ${smBreak} {
              max-width: 4000px;
            }
          `}
        >
          <div>
            <span
              className="h-3"
              css={css`
                line-height: 1.4;
                font-style: italic;
                font-synthesis: none;
              `}
            >
              {contentfulHeading.subtitle}
            </span>
          </div>
        </h3>
      </GridSingle>
    </TitleAreaNew>
  );
};

export default Splash;
