/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { lgCardBreak, smBreak, xsBreak } from "../_Theme/UpdatedBrandTheme";

const SectionHeader = ({
  title,
  subtitle,
  summary,
  big,
  wideContent,
  shrinkToColumn
}) => (
  <div
    css={css`
      width: 100%;
      background-color: white;
      padding-top: 100px;
      ${smBreak} {
        padding-top: 0;
      }
    `}
  >
    <div
      css={css`
        display: grid;
        margin: 0 auto;
        width: 100%;
        max-width: ${wideContent ? "1330px" : "1040px"};
        padding: ${wideContent ? "0 40px" : ""};

        ${lgCardBreak} {
          max-width: 900px;
          ${shrinkToColumn ? "width: max-content;" : ""}
        }

        ${smBreak} {
          padding: ${wideContent ? "0" : "0 10px"};
          justify-content: center;
        }

        ${xsBreak} {
          padding: 0 20px;
          width: auto;
        }
      `}
    >
      {title && (
        <h2
          className={big ? "h-1" : "h-2"}
          css={css`
            margin-bottom: 0;
          `}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <h3
          className={big ? "h-2" : "h-3"}
          css={css`
            max-width: 600px;
          `}
        >
          {subtitle}
        </h3>
      )}
      {summary && (
        <div
          css={css`
            max-width: 600px;
          `}
        >
          {documentToReactComponents(summary)}
        </div>
      )}
    </div>
  </div>
);

export default SectionHeader;
