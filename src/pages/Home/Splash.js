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
        wideContent
      >
        <h2
          className="h-1"
          css={css`
            margin-top: 0px;
            margin-bottom: 1rem;
            max-width: 900px;
            display: grid;
            justify-self: left;
            color: ${colors.subdued.hex};
            ${smBreak} {
              max-width: 4000px;
            }
          `}
        >
          <div>
            <span>{contentfulHeading.title}</span>
          </div>
        </h2>
        <span
          className="h-2"
          css={css`
            margin-top: 0;
            margin-bottom: 0;
          `}
          role="img"
          aria-label="skin tone rainbow of clapping hands"
        >
          👏🏻👏🏼👏🏽👏🏾👏🏿
        </span>
        <h3
          css={css`
            max-width: 900px;
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
                /* line-height: 1.4;
                font-style: italic;
                font-synthesis: none; */
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
