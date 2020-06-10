/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { smBreak, xsBreak } from "../_Theme/UpdatedBrandTheme";
import GridSingle from "./GridSingle";
import ContentContainer from "./ContentContainer";
import Mailchimp from "./Mailchimp";

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
        <Mailchimp />
      </div>
    </GridSingle>
  </ContentContainer>
);

export default KeepInTheLoop;
