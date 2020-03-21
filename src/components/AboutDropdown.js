/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useState } from "react";
import { PropTypes } from "prop-types";

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
          About Us{" "}
          <KeyboardArrowDownIcon
            css={css`
              font-size: 1.5em;
              margin-bottom: -5px;
              ${dropdownOpen ? "transform: rotate(180deg);" : ""}
            `}
          />
        </p>
      </button>
      <div
        css={css`
          position: absolute;
          top: ${dropdownOpen ? "89px" : "-2000px"};
          background-color: white;
          border: 2px solid #aaa4ab;
          margin-left: -5px;
          padding: 0 1em;
        `}
      >
        <ul>
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
