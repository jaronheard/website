/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

import { smBreak, colors } from "../../_Theme/UpdatedBrandTheme";
import GridSingle from "../../components/GridSingle";
import TitleAreaNew from "../../components/TitleAreaNew";

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
            max-width: 650px;
            display: grid;
            justify-self: left;
            font-weight: 700;
            line-height: 1.15;
            margin: 0;
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
                box-shadow: 0 0.1rem 0 0.2rem ${colors.primary.hex},
                  0.2rem 0.1rem 0 0.2rem ${colors.primary.hex},
                  -0.2rem 0.1rem 0 0.2rem ${colors.primary.hex},
                  0.5rem 0.4rem 0 0.2rem ${colors.plumLight.hex},
                  0.2rem 0.4rem 0 0.2rem ${colors.plumLight.hex};
                box-decoration-break: clone;
                letter-spacing: 0.1rem;
              `}
            >
              {contentfulHeading.title}
            </span>
          </div>
        </h2>
        <h3
          css={css`
            max-width: 600px;
            padding: 1rem;
            display: grid;
            margin: 0;
            justify-self: right;
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
                color: ${colors.white};
                background-color: ${colors.primary.hex};
                line-height: 1.4;
                font-style: italic;
                font-synthesis: none;
                box-shadow: 0 0.1rem 0 0.2rem ${colors.primary.hex},
                  0.2rem 0.1rem 0 0.2rem ${colors.primary.hex},
                  -0.2rem 0.1rem 0 0.2rem ${colors.primary.hex},
                  0.5rem 0.4rem 0 0.2rem ${colors.plumLight.hex},
                  0.2rem 0.4rem 0 0.2rem ${colors.plumLight.hex};
                box-decoration-break: clone;
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
