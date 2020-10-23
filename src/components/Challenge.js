/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";
import UpdatedBrandTheme, { colors } from "../_Theme/UpdatedBrandTheme";
import ShadowBox from "./ShadowBox";

// https://app.contentful.com/spaces/3j4jpxgb52st/content_types/challenge/fields

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
    <a href={url} target="_blank" rel="noreferrer" className="btn-purple">
      <p>Read more & apply</p>
    </a>
  </div>
);

Button.propTypes = {
  url: PropTypes.string
};

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
  link,
  completed
}) => {
  const dateObj = new Date(date);
  return (
    <ShadowBox
      title={`${completed ? "✅ " : "🤔 "}${title}`}
      fullWidth
      Button={!completed && link && <Button url={link} />}
      link={completed && link}
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
      {!completed && (
        <div>
          <i>
            {date && dateObj.toLocaleDateString("en-US", dateOptions)}{" "}
            {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </i>
        </div>
      )}
      {summary && <p>{summary}</p>}
      {!completed && outcomes && (
        <p>
          <strong>Expected outcomes: </strong>
          {outcomes}
        </p>
      )}
      {!completed && applicants && (
        <p>
          <strong>Encouraged applicants: </strong>
          {applicants}
        </p>
      )}
      {!completed && time && (
        <p>
          <strong>Expected preparation time: </strong>
          {time}
        </p>
      )}
    </ShadowBox>
  );
};

Challenge.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  time: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  summary: PropTypes.string,
  outcomes: PropTypes.string,
  applicants: PropTypes.string,
  link: PropTypes.string,
  completed: PropTypes.bool
};

export default Challenge;
