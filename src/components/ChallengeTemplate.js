/* eslint-disable react/prop-types */
import React from "react";

import PageLayout from "./PageLayout";
import TitleAreaNew from "./TitleAreaNew";
import DefaultTitleAreaContent from "./DefaultTitleAreaContent";
import DividerLine from "./DividerLine";
import { colors } from "../_Theme/UpdatedBrandTheme";
import ContentContainer from "./ContentContainer";
import Challenge from "./Challenge";

const ChallengeTemplate = ({ pageContext }) => {
  const { challenge } = pageContext;

  return (
    <PageLayout title={challenge.title}>
      <TitleAreaNew dividerLineColor={colors.blue.hex}>
        <DefaultTitleAreaContent
          title={challenge.title}
          subtitle="Focus Session"
        />
      </TitleAreaNew>
      <ContentContainer margin="md">
        <Challenge
          title={challenge.title}
          tags={challenge.tags}
          time={challenge.time}
          date={challenge.date}
          summary={challenge.summary}
          outcomes={challenge.outcomes}
          applicants={challenge.applicants}
          link={challenge.link}
        />
      </ContentContainer>
      <DividerLine hexColor={colors.pink.hex} />
    </PageLayout>
  );
};

export default ChallengeTemplate;
