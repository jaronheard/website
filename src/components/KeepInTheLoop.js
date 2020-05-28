/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { colors, smBreak, xsBreak } from "../_Theme/UpdatedBrandTheme";
import GridSingle from "./GridSingle";
import ContentContainer from "./ContentContainer";

const KeepInTheLoop = () => (
  <ContentContainer margin="sm">
    <GridSingle
      containerStyle={css`
        padding: 0 20px;
        max-width: 1100px;
        ${smBreak} {
          max-width: 600px;
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
        <h2
          css={css`
            margin-top: 0;
          `}
        >
          Stay up to date{" "}
          <span role="img" aria-label="mail heart emoji">
            💌
          </span>
        </h2>
        <p>
          Be the first to know about program announcements, new technology
          releases, and special surprises. We promise to never spam, bore, or
          annoy.
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
  </ContentContainer>
);

export default KeepInTheLoop;
