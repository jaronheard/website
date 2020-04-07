/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import CTAButtons from "./CTAButtons";

const CommonCTA = () => (
  <div
    css={css`
      max-width: 400px;
      margin: 3rem auto 4rem;
      text-align: center;
    `}
  >
    <h2>Build with us</h2>
    <CTAButtons vertical />
  </div>
);

export default CommonCTA;
