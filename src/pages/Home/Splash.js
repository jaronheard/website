/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import { Logo } from "@hackoregon/ui-brand";

import { smBreak, colors } from "../../_Theme/UpdatedBrandTheme";
import GridSingle from "../../components/GridSingle";
import TitleAreaNew from "../../components/TitleAreaNew";

const logoContainer = css`
  position: relative;
  left: -4vw;
  top: 0px;
  img {
    height: 100px !important;
    margin-top: -100px;
  }
  ${smBreak} {
    left: 0;
    img {
      height: 60px !important;
      margin-top: -100px;
    }
  }
`;

const Splash = () => {
  const { contentfulHeading } = useStaticQuery(graphql`
    query {
      contentfulHeading(contentful_id: { eq: "3Hy2d9lrRRmragYcOSoDl3" }) {
        subtitle
        title
      }
    }
  `);

  return (
    <TitleAreaNew>
      <GridSingle
        containerStyle={css`
          width: 100%;
          padding: 0;
        `}
      >
        <h2
          css={css`
            max-width: 700px;
            display: grid;
            justify-self: left;
            font-weight: 700;
            line-height: 1.15;
            color: ${colors.subdued.hex};
            ${smBreak} {
              max-width: 4000px;
            }
          `}
        >
          <div>
            <div css={logoContainer}>
              <Logo type="squareLogoInverted" />
            </div>
            <span
              css={css`
                line-height: 1.4;
                letter-spacing: 0.1rem;
              `}
            >
              {contentfulHeading.title}
            </span>
          </div>
        </h2>
        <h3
          css={css`
            max-width: 700px;
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
                color: ${colors.subdued.hex};
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
