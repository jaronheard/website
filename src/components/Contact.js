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
  <ContentContainer margin="md" color={colors.primary.hex}>
    <div
      css={css`
        text-align: left;
        padding: 3rem 3rem 0;
        ${maxContentWidth}
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
          justify-content: space-around;
          grid-template-columns: max-content max-content;

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
            <Link to="/project-form/">Project inquiries</Link>
          </li>
          <li>
            <Link to="/impact-form/">Partnership inquiries</Link>
          </li>
          <li>
            <Link to="/contributor-apply/">Apply to contribute</Link>
          </li>
          <li>
            <a href="mailto:hi@civicsoftwarefoundation.org">
              hi@civicsoftwarefoundation.org
            </a>
          </li>
          <li
            className="extra-margin"
            css={css`
              margin: 30px 0;
            `}
          >
            <Link to="/projects/">Past projects</Link>
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
    </div>
  </ContentContainer>
);

export default Contact;
