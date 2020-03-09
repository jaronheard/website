/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { BrandColors } from "@hackoregon/ui-themes";

const footerText = css`
  color: ${BrandColors.subdued.hex};
`;

const Footer = () => (
  <footer
    css={css`
      background-color: ${BrandColors.primary.hex};
      text-align: center;
      padding: 1em;
    `}
  >
    <p className="p-sm" css={footerText}>
      Civic Software Foundation is a 501(c)(3) registered non-profit
      organization.
      <br />
      <a href>CC BY License</a>
    </p>
  </footer>
);

export default Footer;
