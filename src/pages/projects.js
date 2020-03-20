/** @jsx jsx */
import { jsx } from "@emotion/core";

import PageLayout from "../components/PageLayout";
import ProjectsHeader from "./Projects/ProjectsHeader";
import FeaturedProjects from "../components/FeaturedProjects";
import { colors } from "../_Theme/UpdatedBrandTheme";

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
    </PageLayout>
  );
};

export default ProjectsPage;
