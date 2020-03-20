/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Fragment } from "react";
import PropTypes from "prop-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import UpdatedBrandTheme from "../_Theme/UpdatedBrandTheme";

// https://app.contentful.com/spaces/3j4jpxgb52st/content_types/project/fields

const details = css`
  p {
    ${UpdatedBrandTheme[".data-sm"]} margin-block-start: 0.075rem;
    margin-block-end: 0.075rem;
  }
`;

const ProjectDetail = ({
  title,
  year,
  summary,
  organizations,
  description,
  program,
  projectTypes,
  topics
}) => (
  <Fragment>
    <h2>{title}</h2>
    <div css={details}>
      {year && (
        <p>
          <strong>Year: </strong>
          {year}
        </p>
      )}
      {program && (
        <p>
          <strong>Program: </strong>
          {program}
        </p>
      )}
      {organizations && (
        <p>
          <strong>Organizations: </strong>
          {organizations.map(org => org.name).join(", ")}
        </p>
      )}
      {projectTypes && (
        <p>
          <strong>Project Types: </strong>
          {projectTypes.map(type => type.name).join(", ")}
        </p>
      )}
      {topics && (
        <p>
          <strong>Topics: </strong>
          {topics.map(topic => topic.name).join(", ")}
        </p>
      )}
    </div>
    {summary && <p>{summary}</p>}
    {description && (
      <p>
        <strong>Description: </strong>
        {documentToReactComponents(description)}
      </p>
    )}
  </Fragment>
);

ProjectDetail.propTypes = {
  title: PropTypes.string,
  year: PropTypes.string,
  summary: PropTypes.string,
  organizations: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  projectTypes: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  topics: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  description: PropTypes.shape({
    /* contentful JSON */
  }),
  program: PropTypes.string
};

export default ProjectDetail;
