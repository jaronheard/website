/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { PropTypes } from "prop-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "gatsby";

import DividerLine from "./DividerLine";
import { lgCardBreak, smBreak, xsBreak } from "../_Theme/UpdatedBrandTheme";

const GridList = ({
  showDividerLine,
  dividerLineColor,
  bottomContent,
  buttonText,
  buttonLocalLink,
  children,
  wideContent,
  shrinkToColumn
}) => {
  return (
    <div
      css={css`
        width: 100vw;
      `}
    >
      <div
        className="GridListContent"
        css={css`
          max-width: ${wideContent ? "1330px" : "1100px"};
          padding: ${wideContent ? "0 40px" : ""};

          ${lgCardBreak} {
            grid-template-columns: ${shrinkToColumn
              ? `100%;`
              : `repeat(2, auto);`};
            max-width: 900px;
            ${shrinkToColumn
              ? `
              justify-items: center;
            `
              : ""}
          }

          ${smBreak} {
            padding: ${wideContent ? "0" : "0 10px"};
            grid-template-columns: 99vw;
            justify-content: center;
          }

          ${xsBreak} {
            padding: 0 5px 0 0;
          }
        `}
      >
        {children}
      </div>
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
  showDividerLine: PropTypes.bool,
  dividerLineColor: PropTypes.string,
  bottomContent: PropTypes.shape({
    /* takes an extraContent.json */
  }),
  buttonText: PropTypes.string,
  buttonLocalLink: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
  wideContent: PropTypes.bool,
  shrinkToColumn: PropTypes.bool
};

export default GridList;
