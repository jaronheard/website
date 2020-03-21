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
        `}
      >
        <p className="action">
          About{" "}
          {dropdownOpen ? (
            <KeyboardArrowUpIcon
              css={css`
                font-size: 1.5em;
                margin-bottom: -5px;
              `}
            />
          ) : (
            <KeyboardArrowDownIcon
              css={css`
                font-size: 1.5em;
                margin-bottom: -5px;
              `}
            />
          )}
        </p>
      </button>
      <div
        css={css`
          position: absolute;
          top: ${dropdownOpen ? "88px" : "-2000px"};
          right: -1em;
          background-color: white;
          border: 3px solid ${colors.subdued.hex};
          box-shadow: 6px 6px 0px ${colors.medium.hex};
          padding: 0 1em;
          width: max-content;
        `}
      >
        <ul
          css={css`
            > li > button > p {
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
              <p>Disciplines & Roles</p>
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
              <p>Projects</p>
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
              <p>About Us</p>
            </button>
          </li>
          <li>
            <a href="#contact" tabIndex={`${dropdownOpen ? "0" : "1`"}`}>
              <p>Contact</p>
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
