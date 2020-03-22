/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import CTAButtons from "./CTAButtons";

const CommonCTA = () => (
  <div
    css={css`
      display: grid;
      max-width: 400px;
      margin: 30px auto 20px;
      text-align: center;
      justify-content: center;
    `}
  >
    <h2 className="h-2-alt">Build with us</h2>
    <CTAButtons vertical />
  </div>
);

export default CommonCTA;
