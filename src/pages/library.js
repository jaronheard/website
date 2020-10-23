/** @jsx jsx */
import { jsx } from "@emotion/core";

import LibraryHeader from "./Library/LibraryHeader";
import LibraryComponents from "./Library/LibraryComponents";
import UpcomingChallenges from "./Library/UpcomingChallenges";
import CompletedChallenges from "./Library/CompletedChallenges";
import PageLayout from "../components/PageLayout";
import ContentContainer from "../components/ContentContainer";
import DividerLine from "../components/DividerLine";
import { colors } from "../_Theme/UpdatedBrandTheme";
import GeneralChallengeApplication from "./Library/GeneralChallengeApplication";
import KeepInTheLoop from "../components/KeepInTheLoop";

const LibraryPage = () => {
  return (
    <PageLayout
      title="CIVIC Data Library"
      keywords={[`Civic Software Foundation`, `CIVIC Data Library`]}
      swoopColor={colors.pink.hex}
      hideCommonCTA
      hideKeepInTheLoop
    >
      <LibraryHeader />
      <ContentContainer margin="md">
        <LibraryComponents />
      </ContentContainer>
      <ContentContainer margin="md">
        <UpcomingChallenges />
        <GeneralChallengeApplication />
      </ContentContainer>
      <DividerLine hexColor={colors.yellow.hex} />{" "}
      <ContentContainer margin="md">
        <CompletedChallenges />
      </ContentContainer>
      <DividerLine hexColor={colors.blue.hex} />
      <KeepInTheLoop library />
    </PageLayout>
  );
};

export default LibraryPage;
