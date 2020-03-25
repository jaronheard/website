/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { PropTypes } from "prop-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "gatsby";

import DividerLine from "./DividerLine";
import { smBreak, xsBreak } from "../_Theme/UpdatedBrandTheme";

const GridList = ({
  title,
  subtitle,
  showDividerLine,
  dividerLineColor,
  bottomContent,
  buttonText,
  buttonLocalLink,
  children
}) => {
  return (
    <div>
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
            max-width: 600px;
            display: grid;
            margin: 0 auto;

            ${smBreak} {
              padding: 0 40px;
            }

            ${xsBreak} {
              padding: 0 20px;
            }
          `}
        >
          {title && <h2>{title}</h2>}
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
      {children}
      {(bottomContent || buttonText) && (
        <div
          css={css`
            margin: 115px auto 0;
            max-width: 600px;
            display: grid;
            justify-items: right;

            ${smBreak} {
              margin: 60px auto 0;
              padding: 0 20px;
              justify-items: center;
            }
          `}
        >
          {bottomContent && <p>{documentToReactComponents(bottomContent)}</p>}
          {buttonText && (
            <Link
              to={buttonLocalLink}
              className="btn-purple"
              css={css`
                margin-top: 70px;
                width: max-content;
                padding: 0 1rem;

                ${smBreak} {
                  margin-top: 30px;
                }
              `}
            >
              <p>{buttonText}</p>
            </Link>
          )}
        </div>
      )}
      {showDividerLine && <DividerLine hexColor={dividerLineColor} />}
    </div>
  );
};

GridList.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  showDividerLine: PropTypes.bool,
  dividerLineColor: PropTypes.string,
  bottomContent: PropTypes.shape({
    /* takes an extraContent.json */
  }),
  buttonText: PropTypes.string,
  buttonLocalLink: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any
};

export default GridList;
