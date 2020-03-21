/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { BrandColors } from "@hackoregon/ui-themes";
import Contact from "./Contact";

const footerText = css`
  color: ${BrandColors.subdued.hex};
  margin: 30px;
`;

const Footer = () => (
  <footer
    css={css`
      background-color: ${BrandColors.primary.hex};
      text-align: center;
      padding-bottom: 1rem;
    `}
  >
    <Contact />
    <div
      css={css`
        border-top: 1px solid white;
        margin-top: 90px;
      `}
    >
      <p className="p-sm" css={footerText}>
        Civic Software Foundation is a 501(c)(3) registered non-profit
        organization.
        <br />
        <a
          css={css`
            color: white;
          `}
          href
        >
          CC BY License
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
