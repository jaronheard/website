/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Button } from "@hackoregon/ui-core";

// https://app.contentful.com/spaces/3j4jpxgb52st/content_types/callToActionBlock/fields

const CallToActionCard = ({ tagline, summary, button }) => (
  <div className="ShadowBox">
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
    {button && <Button>{button}</Button>}
  </div>
);

export default CallToActionCard;
