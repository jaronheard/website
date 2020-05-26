/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import CTAButtons from "./CTAButtons";
import ContentContainer from "./ContentContainer";

const CommonCTA = () => (
  <ContentContainer margin="sm">
    <div
      css={css`
        margin: 0 auto;
        max-width: 400px;
        text-align: center;
      `}
    >
      <h2>Build with us</h2>
      <CTAButtons vertical />
    </div>
  </ContentContainer>
);

export default CommonCTA;
