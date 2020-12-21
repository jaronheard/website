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
    <TitleAreaNew showHeaderImage>
      <GridSingle
        containerStyle={css`
          width: 100%;
          padding: 0;
          display: flex;
          flex-direction: column;
        `}
        wideContent
      >
        <h2
          className="h-1"
          css={css`
            margin-top: 0;
            margin-bottom: 1rem;
            max-width: 900px;
            display: block;
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
        <h3
          css={css`
            max-width: 900px;
            display: block;
            margin: 0;
            justify-self: left;
            ${smBreak} {
              max-width: 4000px;
            }
          `}
        >
          <div>
            <span
              className="h-3"
              css={css`
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
