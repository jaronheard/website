/** @jsx jsx */
import { jsx } from "@emotion/core";

import PlatformHeader from "./Platform/PlatformHeader";
// import ContributorBlock from "./Platform/ContributorBlock";
import PageLayout from "../components/PageLayout";
import { colors } from "../_Theme/UpdatedBrandTheme";

const PlatformPage = () => {
  return (
    <PageLayout
      title="Platform"
      keywords={[`Civic Software Foundation`, `CIVIC Platform`]}
      swoopUp
      swoopColor={colors.purple.hex}
    >
      <PlatformHeader />
      {/* <ContributorBlock /> */}
    </PageLayout>
  );
};

export default PlatformPage;
