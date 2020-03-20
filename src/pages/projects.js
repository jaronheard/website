/** @jsx jsx */
import { jsx } from "@emotion/core";

import PageLayout from "../components/PageLayout";
import ProjectsHeader from "./Projects/ProjectsHeader";
import FeaturedProjects from "../components/FeaturedProjects";
import ProjectDetailList from "../components/ProjectDetailList";
import GridTrio from "../components/GridTrio";
import { colors } from "../_Theme/UpdatedBrandTheme";
import DividerLine from "../components/DividerLine";

const ProjectsPage = () => {
  return (
    <PageLayout
      title="Platform"
      keywords={[`Civic Software Foundation`, `CIVIC Platform`]}
      swoopUp
      swoopColor={colors.purple.hex}
    >
      <ProjectsHeader />
      <FeaturedProjects />
      <GridTrio title="All Projects">
        <ProjectDetailList />
      </GridTrio>
      <DividerLine hexColor={colors.pink.hex} />
    </PageLayout>
  );
};

export default ProjectsPage;
