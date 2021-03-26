/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import LibraryHeader from "./Library/LibraryHeader";
import PageLayout from "../components/PageLayout";
import ContentContainer from "../components/ContentContainer";
import DividerLine from "../components/DividerLine";
import { colors, smBreak } from "../_Theme/UpdatedBrandTheme";
import KeepInTheLoop from "../components/KeepInTheLoop";
import GridSingle from "../components/GridSingle";

const LibraryPage = () => {
  const { allContentfulCallToActionSimple } = useStaticQuery(
    graphql`
      {
        allContentfulCallToActionSimple {
          edges {
            node {
              contentful_id
              summary {
                json
              }
              buttonHref
              buttonTitle
            }
          }
        }
      }
    `
  );

  // This is a semi-hacky solution. I'm creating a map of all of the call to actions and then selecting the ones I want from it
  const CTANodes = allContentfulCallToActionSimple.edges.reduce(
    function reducer(nodeMap, currentNode) {
      // eslint-disable-next-line no-param-reassign
      nodeMap[currentNode.node.contentful_id] = currentNode.node;
      return nodeMap;
    },
    {}
  );
  const visionNode = CTANodes["7G0jZnu5uJxhpxtVNXyli7"];
  // const joinNode = CTANodes["5hyKcbsKzpt8tcGKvS0Anc"];
  // const publisherNode = CTANodes["60P95Pu4mUHzL9lkKliYT1"];
  // const contextTeamNode = CTANodes["6ZBqjxU2nwfmPIw1xnCFJp"];
  const gridContainerStyle = css`
    margin-bottom: 4rem;

    h3 {
      margin-top: 3rem;
    }

    > ul,
    ol {
      margin-left: 2rem;
      list-style: initial;
    }

    ${smBreak} {
      padding: 0 20px;
    }
  `;

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
        {/* Vision */}
        <GridSingle containerStyle={gridContainerStyle}>
          {documentToReactComponents(visionNode.summary.json)}
          <a href={`${visionNode.buttonHref}`} className="btn-yellow">
            <p>{visionNode.buttonTitle}</p>
          </a>
        </GridSingle>
      </ContentContainer>
      <DividerLine hexColor={colors.yellow.hex} />
      <KeepInTheLoop library />
    </PageLayout>
  );
};

export default LibraryPage;
