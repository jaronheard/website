/** @jsx jsx */
import { jsx } from "@emotion/core";

import PageLayout from "../components/PageLayout";
import ProjectsHeader from "./Projects/ProjectsHeader";
import ProjectDetailList from "../components/ProjectDetailList";
import GridList from "../components/GridList";
import { colors } from "../_Theme/UpdatedBrandTheme";
import DividerLine from "../components/DividerLine";
import SectionHeader from "../components/SectionHeader";
import ContentContainer from "../components/ContentContainer";
import AboutOurProjects from "./Projects/AboutOurProjects";
import FeaturedProject from "./Projects/FeaturedProject";

const ProjectsPage = () => {
  return (
    <PageLayout
      title="Platform"
      keywords={[`Civic Software Foundation`, `CIVIC Platform`]}
      swoopColor={colors.yellow.hex}
    >
      <ProjectsHeader />
      <ContentContainer>
        <FeaturedProject />
        <DividerLine hexColor={colors.pink.hex} />
        <AboutOurProjects />
        <DividerLine hexColor={colors.blue.hex} />
        <SectionHeader
          title="All Projects"
          subtitle="Only 2019–2020 projects for now. More history coming soon"
          wideContent
        />
        <GridList wideContent>
          <ProjectDetailList />
        </GridList>
        <DividerLine hexColor={colors.green.hex} />
      </ContentContainer>
    </PageLayout>
  );
};

export default ProjectsPage;
