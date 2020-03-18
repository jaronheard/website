/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// https://app.contentful.com/spaces/3j4jpxgb52st/content_types/callToActionBlock/fields

const CallToActionCard = ({ tagline, summary, button, cardStyle }) => (
  <div className="ShadowBox" css={cardStyle}>
    {tagline && (
      <h3
        css={css`
          text-align: center;
          margin-top: 0;
        `}
      >
        {tagline}
      </h3>
    )}
    {summary && <div>{documentToReactComponents(summary)}</div>}
    {button && (
      <div
        css={css`
          text-align: right;
          margin-right: 1.5em;
        `}
      >
        <span className="a">{button}</span>
      </div>
    )}
  </div>
);

export default CallToActionCard;
