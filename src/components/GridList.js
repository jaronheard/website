/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { PropTypes } from "prop-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "gatsby";

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
  wideContent,
  bottomContent,
  buttonText,
  buttonLocalLink
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
      {(bottomContent || buttonText) && (
        <div
          css={css`
            margin: 115px auto 0;
            max-width: 600px;
            text-align: center;
            display: grid;
            justify-items: center;

            ${smBreak} {
              margin: 60px auto 0;
              padding: 0 20px;
            }
          `}
        >
          {bottomContent && <p>{documentToReactComponents(bottomContent)}</p>}
          {buttonText && (
            <Link
              to={buttonLocalLink}
              className="btn-purple"
              css={css`
                margin-top: 70px;
                width: max-content;

                ${smBreak} {
                  margin-top: 30px;
                }
              `}
            >
              <p>{buttonText}</p>
            </Link>
          )}
        </div>
      )}
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
  wideContent: PropTypes.bool,
  bottomContent: PropTypes.shape({
    /* takes an extraContent.json */
  }),
  buttonText: PropTypes.string,
  buttonLocalLink: PropTypes.string
};

export default GridList;
