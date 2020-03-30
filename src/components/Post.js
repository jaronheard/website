/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { Link } from "gatsby";
import { Location } from "@reach/router";
import { xsBreak } from "../_Theme/UpdatedBrandTheme";
import Video from "./Video";
import GridSingle from "./GridSingle";

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
    `}
  >
    <GridSingle
      containerStyle={css`
        padding: 45px 40px;
        ${xsBreak} {
          padding: 20px 20px;
        }
      `}
    >
      {featured && (
        <div
          css={css`
            width: 100%;
            display: flex;
          `}
        >
          <h3>Featured Post</h3>
        </div>
      )}
      <h2>
        <Location>
          {({ location }) => {
            if (location.pathname === `/posts/${slug}`) {
              return title;
            }
            return <Link to={`/posts/${slug}`}>{title}</Link>;
          }}
        </Location>
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
    </GridSingle>
  </div>
);

export default Post;
