/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { PropTypes } from "prop-types";

import { colors, xsBreak } from "../_Theme/UpdatedBrandTheme";

// eslint-disable-next-line react/prop-types
const DropdownSection = ({ children }) => {
  return (
    <div
      css={css`
        border-top: 1px solid #aaa4ab;
        height: max-content;
        padding: 0 3rem;
        ${xsBreak} {
          padding: 0 2rem;
        }
      `}
    >
      {children}
    </div>
  );
};

const HeaderDropdown = ({ open, headerHeight, goTo }) => {
  return (
    <div
      css={css`
        height: auto;
        background-color: ${colors.white};
        box-shadow: 0px 3px 6px #aaa4ab;
        display: grid;
        z-index: 100;
        position: absolute;
        width: 100%;
        top: 0;
        margin-top: ${open ? headerHeight : "-2000px"};
      `}
    >
      <DropdownSection>
        <button
          type="button"
          onClick={() => {
            goTo("/platform/");
          }}
        >
          <h3>Platform</h3>
        </button>
      </DropdownSection>
      <DropdownSection>
        <h3
          css={css`
            margin-left: -1em;
          `}
        >
          About Us
        </h3>
        <button
          type="button"
          onClick={() => {
            goTo("/disciplines-and-roles/");
          }}
        >
          <h4>Disciplines & Roles</h4>
        </button>
        <button
          type="button"
          onClick={() => {
            goTo("/projects/");
          }}
        >
          <h4>Projects</h4>
        </button>
        <a href="#contact">
          <h4>Contact</h4>
        </a>
      </DropdownSection>
    </div>
  );
};

HeaderDropdown.propTypes = {
  open: PropTypes.bool,
  headerHeight: PropTypes.string,
  goTo: PropTypes.func
};

export default HeaderDropdown;
