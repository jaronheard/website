/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "gatsby";
import DividerLine from "./DividerLine";
import { colors, smBreak, xsBreak } from "../_Theme/UpdatedBrandTheme";
import ContentContainer from "./ContentContainer";

// https://app.contentful.com/spaces/3j4jpxgb52st/content_types/callToActionBlock/fields

const imageStyle = css`
  grid-area: image;
  width: 500px;
  max-width: 40vw;

  ${xsBreak} {
    width: 100%;
    max-width: 400px;
  }
`;

const contentStyle = css`
  grid-area: content;
  display: grid;
  align-content: center;
`;

const makeImage = image => (
  <img
    srcSet={image.fluid.srcSet}
    sizes={image.fluid.sizes}
    alt={image.description}
    css={imageStyle}
  />
);

const DefaultContainer = ({ children }) => <div>{children}</div>;

const CallToActionBlock = ({
  tagline,
  summary,
  extraContent,
  extraContentType,
  ExtraContentContainer = DefaultContainer,
  button,
  buttonLocalLink,
  buttonExternalLink,
  image,
  reverseLayout,
  big,
  narrow,
  buttonColor,
  dividerColor,
  noDivider,
  wrapperCss,
  pair
}) => {
  const CTAimage = image && makeImage(image);

  return (
    <div css={wrapperCss}>
      <ContentContainer margin="lg" noBackground>
        <div
          css={css`
            ${!pair &&
              `
              padding: 0 70px;
              ${smBreak} {
                padding: 0 35px;
              }
            `}
          `}
        >
          <div
            css={css`
            display: grid;
            ${!pair &&
              `
              grid-template-columns: repeat(2, auto);
              grid-template-rows: auto;
              grid-column-gap: 80px;
            `}
            grid-template-areas: "${
              reverseLayout ? "image content" : "content image"
            }";
            width: 100%;
            max-width: ${narrow ? "900px" : "1100px"};
            margin: 0 auto;
            align-items: center;

            ${xsBreak} {
              grid-template-columns: auto;
              ${!pair &&
                `
                grid-template-rows: repeat(2, auto);
                grid-template-areas: 
                  "image"
                  "content";
                grid-row-gap: 80px;
              `}
              justify-items: center;
            }
          `}
          >
            {CTAimage}
            <div css={contentStyle}>
              {tagline && (
                <h2
                  className={big && "h-1"}
                  css={css`
                    margin: 0;
                  `}
                >
                  {tagline}
                </h2>
              )}
              {summary && (
                <div
                  css={css`
                    margin: 40px 0;
                  `}
                >
                  {documentToReactComponents(summary)}
                </div>
              )}
              {extraContent && !extraContentType && (
                <ExtraContentContainer>
                  {documentToReactComponents(extraContent)}
                </ExtraContentContainer>
              )}
              {button && buttonLocalLink && (
                <Link
                  to={`${buttonLocalLink}`}
                  className={`btn-${buttonColor}`}
                  css={css`
                    margin-top: 2rem;
                  `}
                >
                  <p>{button}</p>
                </Link>
              )}
              {button && buttonExternalLink && (
                <a
                  href={`${buttonExternalLink}`}
                  className={`btn-${buttonColor}`}
                  css={css`
                    margin-top: 2rem;
                  `}
                >
                  <p>{button}</p>
                </a>
              )}
            </div>
          </div>
        </div>
      </ContentContainer>
      {!noDivider && <DividerLine hexColor={colors[dividerColor].hex} />}
    </div>
  );
};

export default CallToActionBlock;
