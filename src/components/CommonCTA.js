/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import CTAButtons from "./CTAButtons";

const CommonCTA = () => (
  <div
    css={css`
      display: grid;
      max-width: 400px;
      margin: -60px auto 0;
      text-align: center;
    `}
  >
    <h2>Build with us</h2>
    <CTAButtons vertical />
  </div>
);

export default CommonCTA;
