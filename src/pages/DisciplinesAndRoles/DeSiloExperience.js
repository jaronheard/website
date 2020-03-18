/* eslint-disable graphql/template-strings */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import DividerLine from "../../components/DividerLine";
import { smBreak, colors } from "../../_Theme/UpdatedBrandTheme";

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
    <div
      css={css`
        color: black;
      `}
    >
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
            width: 600px;
            display: grid;
            justify-items: center;
            margin: 0 auto;
          `}
        >
          <h2>{contentfulContentList.title}</h2>
          <p>{contentfulContentList.subtitle.subtitle}</p>
          {contentfulContentList.content.map(({ summary, tagline }) => {
            return (
              <div>
                <p>{tagline}</p>
                {documentToReactComponents(summary.json)}
              </div>
            );
          })}
        </div>
      </div>
      <DividerLine hexColor={colors.pink.hex} />
    </div>
  );
};

export default DeSiloExperience;
