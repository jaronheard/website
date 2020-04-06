/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { useState } from "react";
import { PropTypes } from "prop-types";
import { colors } from "../_Theme/UpdatedBrandTheme";

const AboutDropdown = ({ goTo }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div
      css={css`
        align-items: center;
        display: grid;
        position: relative;
      `}
    >
      <button
        type="button"
        className="headerButton"
        onClick={toggleDropdown}
        css={css`
          display: grid;
          margin: 0;
        `}
      >
        <h3
          css={css`
            color: white;
            margin: 0;
          `}
        >
          About{" "}
          {dropdownOpen ? (
            <KeyboardArrowUpIcon
              fontSize="small"
              css={css`
                font-size: 1.5em;
                margin-bottom: -5px;
              `}
            />
          ) : (
            <KeyboardArrowDownIcon
              fontSize="small"
              css={css`
                font-size: 1.5em;
                margin-bottom: -5px;
              `}
            />
          )}
        </h3>
      </button>
      <div
        css={css`
          position: absolute;
          top: ${dropdownOpen ? "40px" : "-2000px"};
          right: -1em;
          background-color: ${colors.primary.hex};
          outline: 3px solid ${colors.plumLight.hex};
          padding: 0 1em;
          width: max-content;
        `}
      >
        <ul
          css={css`
            > li > button > h3 {
              margin: 0;
            }
          `}
        >
          <li>
            <button
              tabIndex={`${dropdownOpen ? "0" : "-1"}`}
              type="button"
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
              tabIndex={`${dropdownOpen ? "0" : "-1"}`}
              type="button"
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
              tabIndex={`${dropdownOpen ? "0" : "-1"}`}
              type="button"
              className="headerButton"
              onClick={() => {
                goTo("/about/");
              }}
            >
              <h3>About Us</h3>
            </button>
          </li>
          <li>
            <a
              className="headerButton"
              href="#contact"
              tabIndex={`${dropdownOpen ? "0" : "1`"}`}
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
      </div>
    </div>
  );
};

AboutDropdown.propTypes = {
  goTo: PropTypes.func
};

export default AboutDropdown;
