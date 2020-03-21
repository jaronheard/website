/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { PropTypes } from "prop-types";

import DividerLine from "./DividerLine";
import CallToActionCard from "./CallToActionCard";
import { smBreak } from "../_Theme/UpdatedBrandTheme";

const GridTrio = ({
  title,
  subtitle,
  callToActionBlockList,
  showDividerLine,
  dividerLineColor,
  children
}) => (
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
        `}
      >
        {title && <h2>{title}</h2>}
        {subtitle && <h3 className="h-4">{subtitle}</h3>}
      </div>
    </div>
    <div
      css={css`
        display: grid;
        margin: 0 auto;
        grid-template-columns: repeat(3, 1fr);
        padding: 0 40px;
        margin: 25px auto;
        max-width: 1330px;

        @media (max-width: 1230px) {
          width: min-content;
          justify-items: center;
          grid-template-columns: repeat(1, 1fr);
          grid-template-rows: 1fr 1fr 1fr;
          grid-row-gap: 20px;
          width: auto;
        }

        ${smBreak} {
          padding: 0 10px;
        }
      `}
    >
      {callToActionBlockList &&
        callToActionBlockList.map(({ summary, tagline }) => {
          return <CallToActionCard tagline={tagline} summary={summary.json} />;
        })}
      {children}
    </div>
    {showDividerLine && <DividerLine hexColor={dividerLineColor} swoopUp />}
  </div>
);

GridTrio.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  callToActionBlockList: PropTypes.arrayOf(PropTypes.shape({})),
  showDividerLine: PropTypes.bool,
  dividerLineColor: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any
};

export default GridTrio;
