/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { PropTypes } from "prop-types";

import CallToActionCard from "./CallToActionCard";
import {
  lgCardBreak,
  smBreak,
  xsBreak,
  colors
} from "../_Theme/UpdatedBrandTheme";

const { purple, pink, blue, green, yellow } = colors;
const shadowColors = [
  purple.mapFormatRGBA.slice(0, 3),
  pink.mapFormatRGBA.slice(0, 3),
  blue.mapFormatRGBA.slice(0, 3),
  green.mapFormatRGBA.slice(0, 3),
  yellow.mapFormatRGBA.slice(0, 3)
];

const GridListMap = ({
  callToActionBlockList,
  wideContent,
  colorShadow,
  shrinkToColumn
}) => {
  return (
    <div
      className="GridListContent"
      css={css`
        max-width: ${wideContent ? "1330px" : "1040px"};

        ${lgCardBreak} {
          grid-template-columns: ${shrinkToColumn ? `100%;` : `repeat(2,1fr);`};
        }

        ${smBreak} {
          padding: ${wideContent ? "0" : "0 10px"};
          grid-template-columns: 99vw;
        }
      `}
    >
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
              shadowColor={colorShadow ? nextColor : null}
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
  );
};

GridListMap.propTypes = {
  callToActionBlockList: PropTypes.arrayOf(PropTypes.shape({})),
  wideContent: PropTypes.bool,
  bottomContent: PropTypes.shape({
    /* takes an extraContent.json */
  }),
  colorShadow: PropTypes.bool,
  shrinkToColumn: PropTypes.bool
};

export default GridListMap;
