/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import JotformEmbed from "react-jotform-embed";
import { PropTypes } from "prop-types";

import { smBreak } from "../_Theme/UpdatedBrandTheme";

const ContributorApplication = ({ formSrc }) => {
  return (
    <div
      css={css`
        margin-top: 12px;

        .formFooter * {
          display: none;
        }

        ${smBreak} {
          margin-top: -50px;
        }
      `}
    >
      <JotformEmbed src={formSrc} />
    </div>
  );
};

ContributorApplication.propTypes = {
  formSrc: PropTypes.string
};

export default ContributorApplication;
