/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { PropTypes } from "prop-types";

import { smBreak } from "../_Theme/UpdatedBrandTheme";
import DividerLine from "./DividerLine";

const TitleArea = ({
  imageURL,
  imageOpacity = 0.2,
  title,
  subtitle,
  swooshColor
}) => {
  return (
    <div>
      <div
        css={css`
          overflow: hidden;
        `}
      >
        <picture
          css={css`
            background-image: url(${imageURL});
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: local;
            background-position: center;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 106%;
            z-index: -2;
            opacity: ${imageOpacity};
          `}
        />
      </div>
      <div
        css={css`
          display: grid;
          padding: 60px 75px 0;
          grid-template-rows: 1fr 1fr;
          align-items: start;
          margin-bottom: -150px;

          ${smBreak} {
            padding: 65px 20px 0;
            margin-bottom: -40px;
          }
        `}
      >
        {subtitle && (
          <h2
            css={css`
              max-width: 650px;
              display: grid;
            `}
          >
            {subtitle}
          </h2>
        )}
        <h1
          css={css`
            margin-top: 150px;
            justify-self: end;

            ${smBreak} {
              margin-top: 75px;
            }
          `}
        >
          {title}
        </h1>
      </div>
      <DividerLine hexColor={swooshColor} />
    </div>
  );
};

TitleArea.propTypes = {
  imageURL: PropTypes.string,
  imageOpacity: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  swooshColor: PropTypes.string
};

export default TitleArea;
