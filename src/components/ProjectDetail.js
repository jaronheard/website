/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";
import UpdatedBrandTheme from "../_Theme/UpdatedBrandTheme";
import ShadowBox from "./ShadowBox";

// https://app.contentful.com/spaces/3j4jpxgb52st/content_types/project/fields

const details = css`
  p {
    ${UpdatedBrandTheme[".data-sm"]} margin-block-start: 0.075rem;
    margin-block-end: 0.075rem;
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

const ProjectDetail = ({
  title,
  year,
  yearEnd,
  current,
  summary,
  organizations,
  program,
  projectTypes,
  topics,
  projectUrl
}) => {
  const pluralizeYears = current || (year && yearEnd && year !== yearEnd);

  return (
    <ShadowBox
      title={title}
      wide
      Button={projectUrl && <Button url={projectUrl} />}
    >
      <div css={details}>
        {year && (
          <p>
            <strong>{pluralizeYears ? "Years: " : "Year: "}</strong>
            {`${year || ""}${(pluralizeYears && "–") || ""}${(pluralizeYears &&
              (current ? "present" : yearEnd)) ||
              ""}`}
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
    </ShadowBox>
  );
};

ProjectDetail.propTypes = {
  title: PropTypes.string,
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
  program: PropTypes.string,
  projectUrl: PropTypes.string
};

export default ProjectDetail;
