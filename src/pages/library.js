/** @jsx jsx */
import { jsx, css } from "@emotion/core";

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
      <DividerLine hexColor={colors.pink.hex} />
      <KeepInTheLoop library />
      <DividerLine hexColor={colors.yellow.hex} />{" "}
      <ContentContainer
        css={css`
          margin-bottom: 24rem !important;
        `}
        margin="md"
      >
        <CompletedChallenges />
      </ContentContainer>
    </PageLayout>
  );
};

export default LibraryPage;
