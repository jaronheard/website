/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { xsBreak } from "../../_Theme/UpdatedBrandTheme";
import GridSingle from "../../components/GridSingle";

const Organization = ({ contentfulCallToActionBlock }) => (
  <GridSingle
    containerStyle={css`
      padding: 45px 40px;
      ${xsBreak} {
        padding: 20px 20px;
      }
    `}
  >
    <div
      css={css`
        max-width: 600px;
        display: grid;
        margin: 0 auto;
      `}
    >
      {contentfulCallToActionBlock && contentfulCallToActionBlock.tagline && (
        <h2>{contentfulCallToActionBlock.tagline}</h2>
      )}
      {contentfulCallToActionBlock && contentfulCallToActionBlock.tagline && (
        <p>
          {documentToReactComponents(contentfulCallToActionBlock.summary.json)}
        </p>
      )}
    </div>
  </GridSingle>
);

export default Organization;
