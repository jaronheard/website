/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import JotformEmbed from "react-jotform-embed";
import { PropTypes } from "prop-types";

import { smBreak } from "../_Theme/UpdatedBrandTheme";

const EmbeddedForm = ({ formSrc }) => {
  return (
    <div
      css={css`
        margin-top: 12px;

        .formFooter * {
          display: none;
        }

        ${smBreak} {
          margin-top: 13px;
        }
      `}
    >
      <JotformEmbed src={formSrc} />
    </div>
  );
};

EmbeddedForm.propTypes = {
  formSrc: PropTypes.string
};

export default EmbeddedForm;
