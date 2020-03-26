/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { PropTypes } from "prop-types";
import { Fragment } from "react";

import CallToActionCard from "./CallToActionCard";
import { xsBreak, colors, lgCardBreak } from "../_Theme/UpdatedBrandTheme";

const { purple, pink, blue, green, yellow } = colors;
const shadowColors = [
  purple.mapFormatRGBA.slice(0, 3),
  pink.mapFormatRGBA.slice(0, 3),
  blue.mapFormatRGBA.slice(0, 3),
  green.mapFormatRGBA.slice(0, 3),
  yellow.mapFormatRGBA.slice(0, 3)
];

const GridListMap = ({ callToActionBlockList, wideContent, colorShadow }) => {
  return (
    <Fragment>
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
                  : `
                  ${lgCardBreak} {
                    width: 322px;
                  }
                  ${xsBreak} {
                    width: 100%;
                  }
                `}
              `}
            />
          );
        }
      )}
    </Fragment>
  );
};

GridListMap.propTypes = {
  callToActionBlockList: PropTypes.arrayOf(PropTypes.shape({})),
  wideContent: PropTypes.bool,
  bottomContent: PropTypes.shape({
    /* takes an extraContent.json */
  }),
  colorShadow: PropTypes.bool
};

export default GridListMap;
