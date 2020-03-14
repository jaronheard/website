/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import pathsImg from "../../images/paths.png";
import CTAButtons from "../../components/CTAButtons";
import { smBreak } from "../../_Theme/UpdatedBrandTheme";

const Splash = () => (
  <div
    css={css`
      display: grid;
      width: 100vw;
    `}
  >
    <img
      src={pathsImg}
      alt=""
      css={css`
        position: absolute;
        width: 125%;
        min-width: 1460px;
        z-index: -1;
        opacity: 0.2;
        justify-self: center;
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
        Imagine a future where information and technology equitably serve the
        public
      </h2>
      <CTAButtons />
    </div>
  </div>
);

export default Splash;
