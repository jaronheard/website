/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

import { smBreak, lgCardBreak } from "../../_Theme/UpdatedBrandTheme";
import GridSingle from "../../components/GridSingle";
import TitleAreaNew from "../../components/TitleAreaNew";

const Splash = () => {
  const { file, contentfulHeading } = useStaticQuery(graphql`
    query {
      file(base: { eq: "hero__test--graph.png" }) {
        publicURL
      }
      contentfulHeading(contentful_id: { eq: "3Hy2d9lrRRmragYcOSoDl3" }) {
        subtitle
        title
      }
    }
  `);

  return (
    <TitleAreaNew backgroundImage={`url(${file.publicURL})`}>
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
            font-weight: 600;
            letter-spacing: 0.025rem;
            line-height: 1.15;
            margin: 0;
            ${lgCardBreak} {
              max-width: 550px;
            }
            ${smBreak} {
              max-width: 425px;
            }
          `}
        >
          {contentfulHeading.title}
        </h2>
        <h4
          css={css`
            max-width: 750px;
            display: grid;
            margin: 0;
            justify-self: right;
            align-self: end;
            ${lgCardBreak} {
              max-width: 650px;
            }
            ${smBreak} {
              max-width: 550px;
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
