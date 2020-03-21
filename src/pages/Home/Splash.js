/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

import { smBreak } from "../../_Theme/UpdatedBrandTheme";
import GridSingle from "../../components/GridSingle";

const Splash = () => {
  const { file, contentfulHeading } = useStaticQuery(graphql`
    query {
      file(base: { eq: "paths.svg" }) {
        publicURL
      }
      contentfulHeading(contentful_id: { eq: "3Hy2d9lrRRmragYcOSoDl3" }) {
        subtitle
        title
      }
    }
  `);

  return (
    <div>
      <picture
        css={css`
          background-image: url(${file.publicURL});
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: local;
          background-position: center;
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 106%;
          z-index: -2;
          opacity: 0.2;
        `}
      />
      <div
        css={css`
          display: grid;
          justify-content: center;
          align-content: center;
          text-align: left;
          padding-top: 90px;

          ${smBreak} {
            padding: 45px 20px 0;
          }
        `}
      >
        <GridSingle
          css={css`
            width: 100%;
          `}
        >
          <h2
            css={css`
              max-width: 650px;
              display: grid;
              justify-self: left;
            `}
          >
            {contentfulHeading.title}
          </h2>
          <h4
            css={css`
              max-width: 750px;
              display: grid;
              justify-self: right;
              margin-top: 65px;
              margin-left: 300px;
              ${smBreak} {
                margin-left: 0;
              }
            `}
          >
            {contentfulHeading.subtitle}
          </h4>
        </GridSingle>
      </div>
    </div>
  );
};

export default Splash;
