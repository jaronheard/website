/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { colors, smBreak, xsBreak } from "../_Theme/UpdatedBrandTheme";
import GridSingle from "./GridSingle";

const KeepInTheLoop = () => (
  <GridSingle
    containerStyle={css`
      padding: 45px 40px;
      max-width: 1100px;
      ${smBreak} {
        max-width: 600px;
      }
      ${xsBreak} {
        padding: 20px 20px;
      }
    `}
  >
    <div
      css={css`
        display: grid;

        ${xsBreak} {
          justify-items: center;
        }
      `}
    >
      <h2>Keep in the loop</h2>
      <p>
        Big announcements are on the horizon. Our newsletter will keep you
        informed on our next big opportunities.
      </p>
      <div
        css={css`
          margin: 1rem auto 2rem;
          display: grid;
          grid-template-columns: 2fr 2fr 3.5fr;
          grid-column-gap: 40px;
          width: 100%;

          input {
            height: 50px;
            border-radius: 10px;
            border: 1px solid ${colors.primary.hex};

            &:focus {
              outline: none;
              border: 3px solid ${colors.blue.hex};
              margin-top: -2px;
            }

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
          ${smBreak} {
            justify-self: center;
          }
        `}
      >
        <p>Sign Up</p>
      </button>
    </div>
  </GridSingle>
);

export default KeepInTheLoop;
