/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

import { colors, smBreak } from "../../_Theme/UpdatedBrandTheme";
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
        <h2
          css={css`
            max-width: 700px;
          `}
        >
          {contentfulHeading.subtitle}
        </h2>
        <h1
          css={css`
            margin-top: 80px;
            display: grid;
            justify-self: right;
            margin-left: 300px;
            ${smBreak} {
              margin-left: 0;
            }
          `}
        >
          {contentfulHeading.title}
        </h1>
      </GridSingle>
    </TitleAreaNew>
  );
};

export default PlatformHeader;
