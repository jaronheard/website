/* eslint-disable graphql/template-strings */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

import DividerLine from "../../components/DividerLine";
import CallToActionCard from "../../components/CallToActionCard";
import {
  smBreak,
  colors,
  xsBreak,
  mdBreak
} from "../../_Theme/UpdatedBrandTheme";

const DeSiloExperience = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { contentfulContentList } = useStaticQuery(
    graphql`
      query {
        contentfulContentList(contentful_id: { eq: "2su5Nc7QbqZ4trvZgxzK0r" }) {
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

            ${smBreak} {
              padding: 0 40px;
            }

            ${xsBreak} {
              padding: 0 20px;
            }
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
            justify-items: center;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr 1fr 1fr;
            grid-row-gap: 20px;
          }

          ${smBreak} {
            width: min-content;
            justify-items: center;
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: 1fr 1fr 1fr;
            grid-row-gap: 20px;
            width: auto;
            padding: 0 10px;
          }
        `}
      >
        {contentfulContentList.content.map(({ summary, tagline }) => {
          return (
            <CallToActionCard
              tagline={tagline}
              summary={summary.json}
              cardStyle={css`
                @media (max-width: 1230px) {
                  width: 100%;
                }

                ${mdBreak} {
                  margin: 15px;
                  width: 80%;
                }

                ${xsBreak} {
                  width: 250px;
                }
              `}
            />
          );
        })}
      </div>
      <DividerLine hexColor={colors.pink.hex} />
    </div>
  );
};

export default DeSiloExperience;
