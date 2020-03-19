/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { Link } from "gatsby";
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

const Post = ({
  title,
  authors,
  content,
  featured,
  slug,
  updated,
  created
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
        width: 600px;
        display: grid;
        justify-items: center;
        margin: 0 auto;
      `}
    >
      {featured && (
        <div
          css={css`
            width: 100%;
            display: flex;
          `}
        >
          <p>Featured Post</p>
        </div>
      )}
      <h2>
        <Link to={`/posts/${slug}`}>{title}</Link>
      </h2>
      {authors.map(author => (
        <p
          className="data-sm"
          css={css`
            margin-top: -1.5rem;
          `}
        >
          Posted {created}
          {updated !== created && `, updated ${updated}`} by{" "}
          <a href={`mailto:${author.email}`}>{author.name}</a>
        </p>
      ))}
      <p>{documentToReactComponents(content.json, options)}</p>
    </div>
  </div>
);

export default Post;
