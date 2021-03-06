/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import { xsBreak } from "../../_Theme/UpdatedBrandTheme";
import GridSingle from "../../components/GridSingle";

const Staff = () => {
  return (
    <GridSingle
      containerStyle={css`
        padding: 0 40px;
        ${xsBreak} {
          padding: 0 20px;
        }
      `}
    >
      <div
        css={css`
          max-width: 600px;
          display: grid;
          margin: 0 auto;
        `}
      >
        <p>
          See the full team working on the{" "}
          <a href="https://www.civicdatalibrary.org/team">CIVIC Data Library</a>
          .
        </p>
      </div>
    </GridSingle>
  );
};

export default Staff;
