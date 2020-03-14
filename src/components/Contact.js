/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { xsBreak } from "../_Theme/UpdatedBrandTheme";

const whiteText = css`
  color: white;
  margin: 0;
`;

const Contact = () => (
  <div
    css={css`
      text-align: left;
      max-width: 1230px;
      margin: 80px auto 0;
      padding: 0 2em;
    `}
  >
    <h3 css={whiteText} className="h-3">
      Contact Us
    </h3>

    <div
      css={css`
        display: grid;
        width: 100%;
        grid-template: auto / 1fr 1fr 1fr;
        justify-content: space-between;
        ${xsBreak} {
          grid-template: auto auto auto / 1fr;
          grid-row-gap: 1em;
        }
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
