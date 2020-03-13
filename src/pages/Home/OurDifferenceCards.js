/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import CallToActionCard from "../../components/CallToActionCard";
import { smBreak } from "../../_Theme/UpdatedBrandTheme";

const OurDifferenceCards = () => {
  const { allContentfulCallToActionBlock } = useStaticQuery(
    graphql`
      query {
        allContentfulCallToActionBlock(
          filter: { ourDifferencePosition: { gte: 1, lte: 3 } }
          sort: { fields: ourDifferencePosition, order: ASC }
        ) {
          edges {
            node {
              tagline
              summary {
                json
              }
              button
            }
          }
        }
      }
    `
  );

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(3, auto);
        justify-content: space-around;
        max-width: 1370px;
        width: 100%;
        margin-top: 80px;

        ${smBreak} {
          grid-template-columns: auto;
          justify-content: center;
          align-content: space-between;
          height: 200px;
          margin-top: 80px;
        }
      `}
    >
      {allContentfulCallToActionBlock.edges.map(el => (
        <CallToActionCard
          tagline={el.node.tagline}
          summary={el.node.summary && el.node.summary.json}
          button={el.node.button}
        />
      ))}
    </div>
  );
};

export default OurDifferenceCards;
