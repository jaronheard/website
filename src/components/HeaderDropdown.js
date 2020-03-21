/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { PropTypes } from "prop-types";

import {
  colors,
  xsBreak,
  mdBreak,
  underlineFocus
} from "../_Theme/UpdatedBrandTheme";

// eslint-disable-next-line react/prop-types
const DropdownSection = ({ children }) => {
  return (
    <div
      css={css`
        border-top: 3px solid ${colors.subdued.hex};
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
        border-bottom: 3px solid ${colors.subdued.hex};
        box-shadow: 6px 6px 0px ${colors.medium.hex};
        display: grid;
        z-index: 100;
        position: absolute;
        width: 100%;
        top: 0;
        margin-top: ${open ? headerHeight : "-2000px"};
        ${mdBreak} {
          display: none;
        }
      `}
    >
      <DropdownSection>
        <button
          type="button"
          className="headerButton"
          onClick={() => {
            goTo("/platform/");
          }}
        >
          <h3>Platform</h3>
        </button>
      </DropdownSection>
      <DropdownSection>
        <h4
          css={css`
            margin-left: -1em;
          `}
        >
          About Us
        </h4>
        <ul>
          <li>
            <button
              type="button"
              tabIndex={`${open ? "0" : "-1"}`}
              className="headerButton"
              onClick={() => {
                goTo("/disciplines-and-roles/");
              }}
            >
              <h3>Disciplines & Roles</h3>
            </button>
          </li>
          <li>
            <button
              type="button"
              tabIndex={`${open ? "0" : "-1"}`}
              className="headerButton"
              onClick={() => {
                goTo("/projects/");
              }}
            >
              <h3>Projects</h3>
            </button>
          </li>
          <li
            css={css`
              margin: 15px 0;
            `}
          >
            <a
              href="#contact"
              tabIndex={`${open ? "0" : "-1"}`}
              css={css`
                color: black;
                ${underlineFocus}
              `}
            >
              <h3>Contact</h3>
            </a>
          </li>
        </ul>
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
