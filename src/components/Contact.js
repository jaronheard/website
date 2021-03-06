/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "gatsby";
import { xsBreak, maxContentWidth, colors } from "../_Theme/UpdatedBrandTheme";
import ContentContainer from "./ContentContainer";

const whiteText = css`
  color: white;
  margin: 0;
`;

const Contact = () => (
  <ContentContainer margin="sm" color={colors.primary.hex}>
    <div
      css={css`
        text-align: left;
        padding: 0 3rem 0;
        ${maxContentWidth}
        margin: 0 auto;
      `}
      name="contact"
    >
      <h3
        css={css`
          padding-bottom: 60px;
          ${whiteText}
        `}
        className="h-3"
      >
        Contact Us
      </h3>

      <div
        css={css`
          width: 100%;
          display: grid;
          grid-template-columns: max-content max-content 1fr;
          grid-gap: 4rem;

          ${xsBreak} {
            grid-template-columns: 1fr;
            grid-row-gap: 60px;
          }
        `}
      >
        <ul
          css={css`
            margin-top: -15px;
            > li {
              margin: 15px 0;
            }
            > li.extra-margin {
              margin: 60px 0 0;
            }
            > li > a {
              color: white;
            }
          `}
        >
          <li>
            <a href="/project-form/">Project inquiries</a>
          </li>
          <li>
            <a href="/impact-form/">Partnership inquiries</a>
          </li>
          <li>
            <Link to="/contributor-apply/">Apply to contribute</Link>
          </li>
          <li>
            <a
              href="https://airtable.com/shr8nHiuUtIAQ8Yzl"
              target="_blank"
              rel="noreferrer"
            >
              Report an issue
            </a>
          </li>
          <li>
            <a
              href="https://airtable.com/shrIq8aOqhrJhCxzS"
              target="_blank"
              rel="noreferrer"
            >
              Make a suggestion
            </a>
          </li>
          <li>
            <a href="mailto:hi@civicsoftwarefoundation.org">Other inquiries</a>
          </li>
        </ul>

        <div
          css={css`
            display: grid;
            ${xsBreak} {
              grid-template-columns: 1fr;
              grid-row-gap: 30px;
            }
          `}
        >
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
            <a css={whiteText} className="p-sm" href="tel:9712700240">
              +1-971-270-0240‬
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
    </div>
  </ContentContainer>
);

export default Contact;
