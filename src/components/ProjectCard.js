/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Fragment } from "react";
import PropTypes from "prop-types";
import ShadowBox from "./ShadowBox";

// https://app.contentful.com/spaces/3j4jpxgb52st/content_types/project/fields

const Button = () => (
  <div
    css={css`
      text-align: right;
      margin-right: 1.5em;
    `}
  >
    <span className="a">More</span>
  </div>
);

const MainContent = ({ summary, partners, year, yearEnd, current }) => {
  const pluralizeYears = current || year !== yearEnd;

  return (
    <Fragment>
      <p className="p-sm">
        <strong>{pluralizeYears ? "Years: " : "Year: "}</strong>
        {`${year || ""}${(pluralizeYears && "–") || ""}${(pluralizeYears &&
          (current ? "present" : yearEnd)) ||
          ""}`}
        {partners && partners.length && (
          <Fragment>
            <br />
            <strong>
              {partners.length > 1 ? "Organizations: " : "Organization: "}
            </strong>
            {partners.join(", ")}
          </Fragment>
        )}
      </p>
      <p>{summary}</p>
    </Fragment>
  );
};

const ProjectCard = ({
  title,
  summary,
  cardStyle,
  shadowColor,
  partners,
  year,
  yearEnd,
  current
}) => {
  return (
    <ShadowBox
      title={title}
      MainContent={
        summary && (
          <MainContent
            summary={summary}
            partners={partners}
            year={year}
            yearEnd={yearEnd}
            current={current}
          />
        )
      }
      Button={<Button />}
      cardStyle={cardStyle}
      shadowColor={shadowColor}
      wide
    />
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  cardStyle: PropTypes.string, // css
  shadowColor: PropTypes.string, // hexcode
  partners: PropTypes.arrayOf(PropTypes.string)
};

export default ProjectCard;
