/* eslint-disable graphql/template-strings */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

import DividerLine from "../../components/DividerLine";
import CallToActionCard from "../../components/CallToActionCard";
import { smBreak, colors } from "../../_Theme/UpdatedBrandTheme";

const CivicExperience = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { contentfulContentList } = useStaticQuery(
    graphql`
      query {
        contentfulContentList(contentful_id: { eq: "75qL3zfEQExmQmj76hJXFI" }) {
          title
          subtitle {
            subtitle
          }
          content {
            summary {
              json
            }
            tagline
          }
        }
      }
    `
  );

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
          `}
        >
          <h2>{contentfulContentList.title}</h2>
          <p>{contentfulContentList.subtitle.subtitle}</p>
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
        {contentfulContentList.content.map(({ summary, tagline }) => {
          return <CallToActionCard tagline={tagline} summary={summary.json} />;
        })}
      </div>
      <DividerLine hexColor={colors.green.hex} swoopUp />
    </div>
  );
};

export default CivicExperience;
