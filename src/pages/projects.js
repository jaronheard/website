/** @jsx jsx */
import { jsx } from "@emotion/core";

import PageLayout from "../components/PageLayout";
import ProjectsHeader from "./Projects/ProjectsHeader";
import ProjectDetailList from "../components/ProjectDetailList";
import GridTrio from "../components/GridTrio";
import { colors } from "../_Theme/UpdatedBrandTheme";
import DividerLine from "../components/DividerLine";
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
      <FeaturedProject />
      <DividerLine hexColor={colors.pink.hex} swoopUp />
      <AboutOurProjects />
      <DividerLine hexColor={colors.blue.hex} />
      <GridTrio
        title="All Projects"
        subtitle="Only 2019–2020 projects for now. More history coming soon"
      >
        <ProjectDetailList />
      </GridTrio>
      <DividerLine hexColor={colors.green.hex} swoopUp />
    </PageLayout>
  );
};

export default ProjectsPage;
