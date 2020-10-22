/** @jsx jsx */
import { jsx } from "@emotion/core";

import LibraryHeader from "./Library/LibraryHeader";
import LibraryComponents from "./Library/LibraryComponents";
import PageLayout from "../components/PageLayout";
import ContentContainer from "../components/ContentContainer";
import DividerLine from "../components/DividerLine";
import { colors } from "../_Theme/UpdatedBrandTheme";

const LibraryPage = () => {
  return (
    <PageLayout
      title="Data Library"
      keywords={[`Civic Software Foundation`, `CIVIC Data Library`]}
      swoopColor={colors.pink.hex}
    >
      <LibraryHeader />
      <ContentContainer margin="md">
        <LibraryComponents />
      </ContentContainer>
      <DividerLine hexColor={colors.yellow.hex} />
    </PageLayout>
  );
};

export default LibraryPage;
