/** @jsx jsx */
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";
import { Fragment } from "react";
import UpdatedBrandTheme, { colors } from "../_Theme/UpdatedBrandTheme";
import ShadowBox from "./ShadowBox";

// https://app.contentful.com/spaces/3j4jpxgb52st/content_types/challenge/fields

const details = css`
  p {
    ${UpdatedBrandTheme[".data-sm"]} margin-block-start: 0.075rem;
    margin-block-end: 0.075rem;
  }
`;

const Button = () => (
  <div
    css={css`
      text-align: right;
      margin-right: 2rem;
      margin-top: 2rem;
    `}
  >
    <a
      href="https://airtable.com/shr6NHWFjEJK0b86n"
      target="_blank"
      rel="noreferrer"
      className="btn-purple"
    >
      <p>Request to join</p>
    </a>
  </div>
);

const tagList = css`
  margin: -0.6125rem 0 0 0;
  li {
    display: inline;
    padding: 0.25rem;
    margin: 0.25rem 0.25rem;
    line-height: 2rem;
    background-color: ${colors.heroPurple.hex};
    color: ${colors.white};
    :first-child {
      margin-left: 0;
    }
    :last-child {
      margin-right: 0;
    }
  }
`;

const dateOptions = {
  weekday: "short",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric"
};

const Challenge = ({
  title,
  tags,
  date,
  time,
  summary,
  outcomes,
  applicants,
  slug,
  completed,
  description,
  link
}) => {
  const dateObj = new Date(date);
  return (
    <ShadowBox
      title={title}
      fullWidth
      Button={!completed && <Button slug={slug} />}
    >
      <div css={details}>
        {tags && (
          <ul css={tagList}>
            {tags.map(tag => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <i>
          {"Synchronous virtual meeting: "}
          {date
            ? `${dateObj.toLocaleDateString("en-US", dateOptions)} ${
                Intl.DateTimeFormat().resolvedOptions().timeZone
              }`
            : "TBD"}
        </i>
      </div>
      {completed && link && (
        <Fragment>
          <h4>
            <strong>
              This focus session is complete!{" "}
              <a href={link} target="_blank" rel="noreferrer">
                View recording & outcomes
              </a>
            </strong>
          </h4>
        </Fragment>
      )}
      {summary && documentToReactComponents(summary)}
      {!completed && (
        <ul>
          {outcomes && (
            <li>
              <strong>Expected outcomes: </strong>
              {outcomes}
            </li>
          )}
          {applicants && (
            <li>
              <strong>Encouraged applicants: </strong>
              {applicants}
            </li>
          )}
          {time && (
            <li>
              <strong>Expected preparation time: </strong>
              {time}
            </li>
          )}
        </ul>
      )}
      {description && documentToReactComponents(description)}
    </ShadowBox>
  );
};

Challenge.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  time: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  summary: PropTypes.shape({
    /* contentful JSON */
  }),
  outcomes: PropTypes.string,
  applicants: PropTypes.string,
  slug: PropTypes.string,
  link: PropTypes.string,
  completed: PropTypes.bool,
  description: PropTypes.shape({
    /* contentful JSON */
  })
};

export default Challenge;
