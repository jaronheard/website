/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

import { smBreak, lgCardBreak, colors } from "../../_Theme/UpdatedBrandTheme";
import GridSingle from "../../components/GridSingle";
import TitleAreaNew from "../../components/TitleAreaNew";

const Splash = () => {
  const { contentfulAsset, contentfulHeading } = useStaticQuery(graphql`
    query {
      contentfulAsset(title: { eq: "sandbox-pencil" }) {
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
    <TitleAreaNew backgroundImage={`url(${contentfulAsset.file.url})`}>
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
            font-weight: 500;
            letter-spacing: 0.025rem;
            line-height: 1.15;
            margin: 0;
            ${lgCardBreak} {
              max-width: 550px;
            }
            ${smBreak} {
              max-width: 425px;
            }
            margin-bottom: 2rem;
          `}
        >
          <div>
            <span
              css={css`
                color: ${colors.white};
                background-color: ${colors.primary.hex};
                line-height: 1.7;
                box-shadow: 0 0 0 0.15rem ${colors.primary.hex},
                  0.2rem 0 0 0.15rem ${colors.primary.hex},
                  -0.2rem 0 0 0.15rem ${colors.primary.hex},
                  0.5rem 0.3rem 0 0.15rem ${colors.plumLight.hex},
                  0.2rem 0.3rem 0 0.15rem ${colors.plumLight.hex};
                box-decoration-break: clone;
              `}
            >
              {contentfulHeading.title}
            </span>
          </div>
        </h2>
        <h4
          className="ShadowBox"
          css={css`
            max-width: 600px;
            padding: 1rem;
            display: grid;
            margin: 0;
            justify-self: right;
            align-self: end;
            ${lgCardBreak} {
              max-width: 500px;
            }
            ${smBreak} {
              max-width: 4000px;
            }
          `}
        >
          {contentfulHeading.subtitle}
        </h4>
      </GridSingle>
    </TitleAreaNew>
  );
};

export default Splash;
