/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

import CTAButtons from "../../components/CTAButtons";
import { smBreak } from "../../_Theme/UpdatedBrandTheme";

const Splash = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(base: { eq: "paths.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <div
      css={css`
        height: max-content;
        :before {
          background-image: url(${file.publicURL});
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: local;
          background-position: center;
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -2;
          opacity: 0.2;
        }
      `}
    >
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
          Imagine a future where information and technology equitably serve the
          public
        </h2>
        <CTAButtons />
      </div>
    </div>
  );
};

export default Splash;
