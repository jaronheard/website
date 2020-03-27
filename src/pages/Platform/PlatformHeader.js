/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

import { colors, smBreak, lgCardBreak } from "../../_Theme/UpdatedBrandTheme";
import TitleAreaNew from "../../components/TitleAreaNew";
import GridSingle from "../../components/GridSingle";

const PlatformHeader = () => {
  const { contentfulHeading } = useStaticQuery(
    graphql`
      query {
        contentfulHeading(contentful_id: { eq: "5e9eWbUqWY0lhyF9TRiSmh" }) {
          title
          subtitle
        }
      }
    `
  );

  return (
    <TitleAreaNew dividerLineColor={colors.purple.hex}>
      <GridSingle
        containerStyle={css`
          width: 100%;
          padding: 0;
        `}
        wideContent
      >
        <div
          css={css`
            display: grid;
          `}
        >
          <h2
            css={css`
              max-width: 700px;
              margin: 0;
              ${lgCardBreak} {
                max-width: 600px;
              }

              ${smBreak} {
                max-width: 500px;
              }
            `}
          >
            {contentfulHeading.subtitle}
          </h2>
          <h1
            css={css`
              display: grid;
              margin: 0;
              justify-self: right;
              align-self: end;
            `}
          >
            {contentfulHeading.title}
          </h1>
        </div>
      </GridSingle>
    </TitleAreaNew>
  );
};

export default PlatformHeader;
