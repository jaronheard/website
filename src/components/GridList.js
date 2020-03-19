/* eslint-disable graphql/template-strings */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { PropTypes } from "prop-types";

import DividerLine from "./DividerLine";
import CallToActionCard from "./CallToActionCard";
import { smBreak, xsBreak, colors } from "../_Theme/UpdatedBrandTheme";

const { purple, pink, blue, green, yellow } = colors;
const shadowColors = [
  purple.mapFormatRGBA.slice(0, 3),
  pink.mapFormatRGBA.slice(0, 3),
  blue.mapFormatRGBA.slice(0, 3),
  green.mapFormatRGBA.slice(0, 3),
  yellow.mapFormatRGBA.slice(0, 3)
];

const GridList = ({
  title,
  subtitle,
  callToActionBlockList,
  showDividerLine,
  dividerLineColor,
  wideContent
}) => {
  return (
    <div>
      <div
        css={css`
          width: 100%;
          background-color: white;
          padding-top: 100px;
          ${smBreak} {
            padding-top: 0;
          }
        `}
      >
        <div
          css={css`
            max-width: 600px;
            display: grid;
            justify-items: center;
            margin: 0 auto;

            ${smBreak} {
              padding: 0 40px;
            }

            ${xsBreak} {
              padding: 0 20px;
            }
          `}
        >
          {title && <h2>{title}</h2>}
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>

      <div className={`GridListContent ${wideContent ? "WideContent" : ""}`}>
        {callToActionBlockList.map(
          ({ summary, tagline, extraContent, extraContentType }, i) => {
            let index = i;

            while (index > shadowColors.length - 1) {
              index -= shadowColors.length;
            }

            const nextColor = shadowColors[index];

            return (
              <CallToActionCard
                tagline={tagline}
                summary={summary.json}
                extraContent={extraContent ? extraContent.json : null}
                extraContentType={extraContentType || null}
                shadowColor={nextColor}
                className="GridListCard"
                cardStyle={css`
                  ${wideContent
                    ? `
                    width: auto;

                    ${xsBreak} {
                      margin: 0 auto;
                      width: calc(100% - 10px);
                      justify-self: start;
                    }
                  `
                    : ""}
                `}
              />
            );
          }
        )}
      </div>
      {showDividerLine && <DividerLine hexColor={dividerLineColor} />}
    </div>
  );
};

GridList.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  callToActionBlockList: PropTypes.arrayOf(PropTypes.shape({})),
  showDividerLine: PropTypes.bool,
  dividerLineColor: PropTypes.string,
  wideContent: PropTypes.bool
};

export default GridList;
