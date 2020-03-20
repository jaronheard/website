/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ShadowBox from "./ShadowBox";

// https://app.contentful.com/spaces/3j4jpxgb52st/content_types/callToActionBlock/fields

const Button = ({ button }) => (
  <div
    css={css`
      text-align: right;
      margin-right: 1.5em;
    `}
  >
    <span className="a">{button}</span>
  </div>
);

const MainContent = ({ content }) => (
  <div>{documentToReactComponents(content)}</div>
);

const FooterContent = ({ content }) => documentToReactComponents(content);

const CallToActionCard = ({
  tagline,
  summary,
  button,
  cardStyle,
  extraContent,
  extraContentType,
  shadowColor
}) => {
  const showFooter = extraContentType === "card-footer";

  return (
    <ShadowBox
      title={tagline}
      MainContent={summary && <MainContent content={summary} />}
      Button={button && <Button button={button} />}
      FooterContent={showFooter && <FooterContent content={extraContent} />}
      cardStyle={cardStyle}
      shadowColor={shadowColor}
    />
  );
};

export default CallToActionCard;
