/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Box } from "@material-ui/core";

const SectionHeader = ({ title, subtitle, summary, big }) => (
  <Box p={2}>
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
    {subtitle && <h3 className={big ? "h-2" : "h-3"}>{subtitle}</h3>}
    {summary && <div>{documentToReactComponents(summary)}</div>}
  </Box>
);

export default SectionHeader;
