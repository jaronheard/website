/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { BLOCKS } from "@contentful/rich-text-types";
import Video from "../components/Video";

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: node => (
      <Video
        title={node.data.target.fields.title["en-US"]}
        url={node.data.target.fields.url["en-US"]}
      />
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul
        css={css`
          list-style: disc;
          padding-left: 2em;
        `}
      >
        {children}
      </ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol
        css={css`
          list-style-type: decimal;
          padding-left: 2em;
        `}
      >
        {children}
      </ol>
    )
  }
};

export default options;
