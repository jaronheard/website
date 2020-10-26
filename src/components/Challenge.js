/** @jsx jsx */
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { jsx, css } from "@emotion/core";
import { Link } from "@reach/router";
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

const Button = ({ slug }) => (
  <div
    css={css`
      text-align: right;
      margin-right: 1.5em;
      margin-top: 1.5em;
    `}
  >
    <Link to={`sessions/${slug}`} className="btn-purple">
      <p>Read more</p>
    </Link>
  </div>
);

Button.propTypes = {
  slug: PropTypes.string
};

const tagList = css`
  margin: -0.6125rem 0 0 -0.25rem;
  li {
    display: inline-block;
    padding: 0.125rem 0.25rem;
    margin: 0.25rem 0.25rem;
    background-color: ${colors.heroPurple.hex};
    color: ${colors.white};
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
  completed
}) => {
  const dateObj = new Date(date);
  return (
    <ShadowBox
      title={title}
      fullWidth
      Button={!completed && <Button slug={slug} />}
      link={completed && `sessions/${slug}`}
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
            {"Synchronous virtual meeting: "}
            {date
              ? `${dateObj.toLocaleDateString("en-US", dateOptions)} ${
                  Intl.DateTimeFormat().resolvedOptions().timeZone
                }`
              : "TBD"}
          </i>
        </div>
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
  completed: PropTypes.bool
};

export default Challenge;
