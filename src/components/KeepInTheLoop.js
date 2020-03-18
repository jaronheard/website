/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { colors, smBreak } from "../_Theme/UpdatedBrandTheme";

const KeepInTheLoop = () => (
  <div
    css={css`
      display: grid;
      justify-items: center;
      margin-bottom: 130px;

      ${smBreak} {
        margin-bottom: 65px;
        padding: 20px;
      }
    `}
  >
    <div
      css={css`
        display: grid;
      `}
    >
      <h2
        css={css`
          margin-bottom: 50px;

          ${smBreak} {
            margin-bottom: 25px;
          }
        `}
      >
        Keep in the loop
      </h2>
      <p>
        Big announcements are on the horizon. Our newsletter will keep you
        informed on our next big opportunities.
      </p>
      <div
        css={css`
          margin: 90px auto 50px;
          display: grid;
          grid-template-columns: 200px 200px 330px;
          grid-column-gap: 40px;

          input {
            height: 50px;
            border-radius: 10px;
            border: 1px solid ${colors.primary.hex};

            ::placeholder {
              color: ${colors.plumLight};
            }
          }

          ${smBreak} {
            margin: 45px auto 25px;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3, 1fr);
            grid-row-gap: 20px;
          }
        `}
      >
        <input placeholder="First name" />
        <input placeholder="Last name" />
        <input placeholder="Email (required)" />
      </div>
      <button
        type="submit"
        className="btn-purple"
        css={css`
          display: grid;
          justify-self: end;
        `}
      >
        <p>Sign Up</p>
      </button>
    </div>
  </div>
);

export default KeepInTheLoop;
