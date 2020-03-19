import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import scatterplotImage from "../../images/scatterplot.png";
import { colors } from "../../_Theme/UpdatedBrandTheme";
import TitleArea from "../../components/TitleArea";

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
    <TitleArea
      imageURL={scatterplotImage}
      imageOpacity={1}
      title={contentfulHeading.title}
      subtitle={contentfulHeading.subtitle}
      swooshColor={colors.purple.hex}
    />
  );
};

export default PlatformHeader;
