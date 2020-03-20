/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

import { smBreak } from "../../_Theme/UpdatedBrandTheme";

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
          text-align: center;
          padding-top: 130px;

          ${smBreak} {
            padding: 65px 20px 0;
          }
        `}
      >
        <h2
          css={css`
            max-width: 650px;
            display: grid;
            justify-self: center;
          `}
        >
          {contentfulHeading.title}
        </h2>
        <h4
          css={css`
            max-width: 750px;
            display: grid;
            justify-self: center;
            margin-top: 65px;
          `}
        >
          {contentfulHeading.subtitle}
        </h4>
      </div>
    </div>
  );
};

export default Splash;
