/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql, Link } from "gatsby";

import PageLayout from "../components/PageLayout";
import TitleAreaNew from "../components/TitleAreaNew";
import DefaultTitleAreaContent from "../components/DefaultTitleAreaContent";
import DividerLine from "../components/DividerLine";
import ContentContainer from "../components/ContentContainer";
import EmbeddedForm from "../components/EmbeddedForm";
import { colors } from "../_Theme/UpdatedBrandTheme";

const ContributorApplication = () => {
  const { contentfulHeading } = useStaticQuery(
    graphql`
      query {
        contentfulHeading(contentful_id: { eq: "2tJ28EnrlmGkfwUTYSBsT2" }) {
          id
          title
        }
      }
    `
  );

  return (
    <PageLayout
      title="Apply"
      keywords={[
        `Civic Software Foundation`,
        `CIVIC Volunteer Application`,
        `CIVIC Contributor Application`
      ]}
    >
      <TitleAreaNew dividerLineColor={colors.yellow.hex}>
        <DefaultTitleAreaContent title={contentfulHeading.title} />
      </TitleAreaNew>
      <ContentContainer margin="md">
        <div
          css={css`
            width: calc(100%-40px);
            max-width: 900px;
            margin: 0 auto;
            padding: 0 20px;
          `}
        >
          <p
            css={css`
              font-weight: bold;
            `}
          >
            Warning! If you use the Privacy Badger extension, you won&apos;t be
            able to save or submit this form. We&apos;re aware of the issue and
            working to resolve it. Make sure to turn it off and refresh the
            page.
          </p>
          <p
            css={css`
              font-style: italic;
            `}
          >
            This application is for the Data Feminism group, there is also the{" "}
            <Link to="/contributor-apply">
              <p
                className="a"
                css={css`
                  display: inline;
                `}
              >
                general contributor application form
              </p>
            </Link>
            .
          </p>
          <EmbeddedForm formSrc="https://form.jotform.com/201465789968173" />
        </div>
      </ContentContainer>
      <DividerLine hexColor={colors.pink.hex} />
    </PageLayout>
  );
};

export default ContributorApplication;
