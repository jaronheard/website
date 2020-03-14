/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import CTAButtons from "./CTAButtons";

const CommonCTA = () => (
  <div
    css={css`
      display: grid;
      max-width: 400px;
      margin: -60px auto 0;
    `}
  >
    <h2>Join the CIVIC Movement</h2>
    <CTAButtons vertical />
  </div>
);

export default CommonCTA;
