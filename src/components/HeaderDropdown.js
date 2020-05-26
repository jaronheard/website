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
        border-top: 3px solid ${colors.plumLight.hex};
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
        background-color: ${colors.primary.hex};
        border-bottom: 3px solid ${colors.plumLight.hex};
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
        <ul className="h-3">
          <li>
            <button
              type="button"
              className="headerButton"
              onClick={() => {
                goTo("/platform/");
              }}
            >
              <h3>Platform</h3>
            </button>
          </li>
        </ul>
      </DropdownSection>
      <DropdownSection>
        <h3
          css={css`
            margin-left: -1em;
            color: ${colors.primary.subdued};
          `}
        >
          About
        </h3>
        <ul>
          <li>
            <button
              type="button"
              tabIndex={`${open ? "0" : "-1"}`}
              className="headerButton"
              onClick={() => {
                goTo("/collaboration/");
              }}
            >
              <h3>Collaboration</h3>
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
          <li>
            <button
              type="button"
              tabIndex={`${open ? "0" : "-1"}`}
              className="headerButton"
              onClick={() => {
                goTo("/about/");
              }}
            >
              <h3>About Us</h3>
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
              <h3
                css={css`
                  color: white;
                `}
              >
                Contact
              </h3>
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
