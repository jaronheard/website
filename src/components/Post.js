/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { smBreak } from "../_Theme/UpdatedBrandTheme";
import Video from "./Video";

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: node => (
      <Video
        title={node.data.target.fields.title["en-US"]}
        url={node.data.target.fields.url["en-US"]}
      />
    )
  }
};

const Post = ({ title, content }) => (
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
        width: 600px;
        display: grid;
        justify-items: center;
        margin: 0 auto;
      `}
    >
      <h2>{title}</h2>
      <p>{documentToReactComponents(content.json, options)}</p>
    </div>
  </div>
);

export default Post;
