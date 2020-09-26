/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { BrandColors } from "@hackoregon/ui-themes";
import Contact from "./Contact";
import ContentContainer from "./ContentContainer";

const footerText = css`
  color: ${BrandColors.subdued.hex};
  margin: 30px;
`;

const Footer = () => (
  <ContentContainer color={BrandColors.primary.hex}>
    <footer
      css={css`
        text-align: center;
        padding-bottom: 1rem;
      `}
    >
      <Contact />
      <div
        css={css`
          border-top: 1px solid white;
        `}
      >
        <p className="p-sm" css={footerText}>
          Civic Software Foundation is a 501(c)(3) registered non-profit
          organization. EIN 46-5498921
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
  </ContentContainer>
);

export default Footer;
