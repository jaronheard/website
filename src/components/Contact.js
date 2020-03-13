/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const whiteText = css`
  color: white;
  margin: 0;
`;

const Contact = () => (
  <div
    css={css`
      display: grid;
      grid-template-rows: repeat(2, auto);
      grid-row-gap: 40px;
      text-align: left;
      width: 100%;
      max-width: 1230px;
      margin: 80px auto 0;
    `}
  >
    <h3 css={whiteText} className="h-3">
      Contact Us
    </h3>

    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(3, auto);
        justify-content: space-between;
      `}
    >
      <div>
        <a
          css={whiteText}
          className="p-sm"
          href="mailto:hi@civicsoftwarefoundation.org"
        >
          hi@civicsoftwarefoundation.org
        </a>
      </div>

      <div>
        <p
          css={css`
            ${whiteText}
            margin-bottom: 40px;
          `}
          className="h-4"
        >
          Creative & Tech HQ
        </p>
        <p css={whiteText} className="p-sm">
          Portland, OR
        </p>
        <a css={whiteText} className="p-sm" href="tel:5033839131">
          +1-503-383-9131‬
        </a>
      </div>

      <div>
        <p
          css={css`
            ${whiteText}
            margin-bottom: 40px;
          `}
          className="h-4"
        >
          Organizational HQ
        </p>
        <p css={whiteText} className="p-sm">
          Washington, DC
        </p>
        <a css={whiteText} className="p-sm" href="tel:12026641223">
          +1-202-664-1223
        </a>
      </div>
    </div>
  </div>
);

export default Contact;
