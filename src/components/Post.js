/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "gatsby";
import { Location } from "@reach/router";
import { xsBreak } from "../_Theme/UpdatedBrandTheme";
import GridSingle from "./GridSingle";
import options from "../_Common/contentfulOptions";

const Post = ({
  title,
  authors,
  content,
  featured,
  slug,
  updated,
  created,
  buttonText,
  buttonLocalLink
}) => (
  <GridSingle
    containerStyle={css`
      padding: 0 40px;
      ${xsBreak} {
        padding: 0 20px;
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
        {updated && updated !== created && `, updated ${updated}`} by{" "}
        <a href={`mailto:${author.email}`}>{author.name}</a>
      </p>
    ))}
    <div>{documentToReactComponents(content.json, options)}</div>
    {buttonText && (
      <Link
        to={buttonLocalLink}
        className="btn-yellow"
        css={css`
          margin-top: 1.5rem;
        `}
      >
        <p>{buttonText}</p>
      </Link>
    )}
  </GridSingle>
);

export default Post;
