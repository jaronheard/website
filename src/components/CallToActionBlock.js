/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import DividerLine from "./DividerLine";
import { colors, smBreak, xsBreak } from "../_Theme/UpdatedBrandTheme";

// https://app.contentful.com/spaces/3j4jpxgb52st/content_types/callToActionBlock/fields

const imageStyle = css`
  grid-area: image;
  width: 400px;
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

const CallToActionBlock = ({
  tagline,
  summary,
  button,
  image,
  reverseLayout,
  big,
  buttonColor,
  dividerColor
}) => {
  const CTAimage = image && makeImage(image);

  return (
    <div>
      <div
        css={css`
          margin-top: 60px;
          padding: 0 70px;
          ${smBreak} {
            margin-top: 0;
            padding: 0 35px;
          }
        `}
      >
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(2, auto);
            grid-template-rows: auto;
            grid-column-gap: 80px;
            grid-template-areas: "${
              reverseLayout ? "image content" : "content image"
            }";
            width: 100%;
            max-width: 1230px;
            margin: 0 auto;
            align-items: center;

            ${xsBreak} {
              grid-template-columns: auto;
              grid-template-rows: repeat(2, auto);
              grid-template-areas: 
                "image"
                "content";
              grid-row-gap: 80px;
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
            {button && (
              <button type="button" className={`btn-${buttonColor}`}>
                <p>{button}</p>
              </button>
            )}
          </div>
        </div>
      </div>
      <DividerLine
        hexColor={colors[dividerColor].hex}
        swoopUp={!reverseLayout}
      />
    </div>
  );
};

export default CallToActionBlock;
