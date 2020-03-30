/** @jsx jsx */
import { jsx } from "@emotion/core";

import PlatformHeader from "./Platform/PlatformHeader";
import PlatformComponents from "./Platform/PlatformComponents";
import PageLayout from "../components/PageLayout";
import ContentContainer from "../components/ContentContainer";
import { colors } from "../_Theme/UpdatedBrandTheme";

const PlatformPage = () => {
  return (
    <PageLayout
      title="Platform"
      keywords={[`Civic Software Foundation`, `CIVIC Platform`]}
      swoopColor={colors.pink.hex}
    >
      <PlatformHeader />
      <ContentContainer>
        <PlatformComponents />
      </ContentContainer>
    </PageLayout>
  );
};

export default PlatformPage;
