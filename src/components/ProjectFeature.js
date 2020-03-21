/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Fragment } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Collapsable } from "@hackoregon/ui-core";
import PropTypes from "prop-types";
import UpdatedBrandTheme from "../_Theme/UpdatedBrandTheme";

// https://app.contentful.com/spaces/3j4jpxgb52st/content_types/project/fields

const details = css`
  ${UpdatedBrandTheme[".data-sm"]}
  margin-bottom: 1rem;
  li {
    display: inline-block;
    margin: 0.075rem 0.25rem;
  }
`;

const Button = ({ url }) => (
  <div
    css={css`
      text-align: right;
      margin-right: 1.5em;
    `}
  >
    <a href={url}>See project</a>
  </div>
);

Button.propTypes = {
  url: PropTypes.string
};

const ProjectFeature = ({
  description,
  year,
  yearEnd,
  current,
  summary,
  organizations,
  program,
  projectTypes,
  topics,
  image
}) => {
  const pluralizeYears = current || (year && yearEnd && year !== yearEnd);

  return (
    <Fragment>
      <h4>{summary}</h4>
      <ul css={details}>
        {year && (
          <li>
            <strong>{pluralizeYears ? "Years: " : "Year: "}</strong>
            {`${year || ""}${(pluralizeYears && "–") || ""}${(pluralizeYears &&
              (current ? "present" : yearEnd)) ||
              ""}`}
          </li>
        )}
        {program && (
          <li>
            <strong>Program: </strong>
            {program}
          </li>
        )}
        {organizations && (
          <li>
            <strong>Organizations: </strong>
            {organizations.map(org => org.name).join(", ")}
          </li>
        )}
        {projectTypes && (
          <li>
            <strong>Project Types: </strong>
            {projectTypes.map(type => type.name).join(", ")}
          </li>
        )}
        {topics && (
          <li>
            <strong>Topics: </strong>
            {topics.map(topic => topic.name).join(", ")}
          </li>
        )}
      </ul>
      {image && (
        <img
          srcSet={image.fluid.srcSet}
          sizes={image.fluid.sizes}
          alt={image.title}
          css={css`
            width: 100%;
          `}
        />
      )}
      <Collapsable>
        <Collapsable.Section hidden>
          {description && documentToReactComponents(description)}
        </Collapsable.Section>
      </Collapsable>
    </Fragment>
  );
};

ProjectFeature.propTypes = {
  year: PropTypes.string,
  yearEnd: PropTypes.string,
  current: PropTypes.bool,
  summary: PropTypes.string,
  organizations: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  projectTypes: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  topics: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  description: PropTypes.shape({
    /* contentful JSON */
  }),
  image: PropTypes.shape({
    title: PropTypes.string,
    fluid: PropTypes.shape({ srcSet: PropTypes.any, sizes: PropTypes.any })
  }),
  program: PropTypes.string
};

export default ProjectFeature;
