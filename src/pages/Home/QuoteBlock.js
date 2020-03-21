/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const QuoteBlock = () => {
  return (
    <div
      css={css`
        padding: 0 70px;
        max-width: 790px;
        margin: 60px auto 0;
      `}
    >
      <h3>
        “When political will meets public imagination, the technology we can
        create is unlike anything the world has ever seen.”
      </h3>
      <p
        css={css`
          text-align: right;
        `}
      >
        &mdash;Cat Nikolovski, Founder of CIVIC
      </p>
    </div>
  );
};

export default QuoteBlock;
