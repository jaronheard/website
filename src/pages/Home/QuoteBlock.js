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
        “It would be super awesome if whe had a dope quote to put here that
        communicates something rather profound from...”
      </h3>
      <p
        css={css`
          text-align: right;
        `}
      >
        &mdash;Data Feminism
      </p>
    </div>
  );
};

export default QuoteBlock;
