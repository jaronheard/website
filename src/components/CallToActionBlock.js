/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// https://app.contentful.com/spaces/3j4jpxgb52st/content_types/callToActionBlock/fields

const imageStyle = css`
  height: 400px;
`;

const contentStyle = css`
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
  big
}) => {
  const CTAimage = image && makeImage(image);

  return (
    <div
      css={css`
        padding: 0 70px;
      `}
    >
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(2, auto);
          grid-column-gap: 80px;
          width: 100%;
          max-width: 1230px;
          margin: 0 auto;
        `}
      >
        {image && reverseLayout && CTAimage}
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
            <button type="button" className="btn-yellow">
              <p>{button}</p>
            </button>
          )}
        </div>
        {image && !reverseLayout && CTAimage}
      </div>
    </div>
  );
};

export default CallToActionBlock;
