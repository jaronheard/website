/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Fragment, useState } from "react";
import { Link, navigate } from "gatsby";
import { Logo } from "@hackoregon/ui-brand";
import MenuIcon from "@material-ui/icons/Menu";

import HeaderDropdown from "./HeaderDropdown";
import AboutDropdown from "./AboutDropdown";
import {
  colors,
  smBreak,
  mdBreak,
  xsBreak,
  noHover,
  focusBorder
} from "../_Theme/UpdatedBrandTheme";

const headerHeight = "90px";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const goTo = path => {
    setDropdownOpen(false);
    navigate(path);
  };

  return (
    <Fragment>
      <div
        css={css`
          height: ${headerHeight};
          background-color: ${colors.white};
          border-bottom: 3px solid ${colors.subdued.hex};
          display: grid;
          padding: 0 2rem;
          ${xsBreak} {
            padding: 0 1rem;
          }
          z-index: 100;
        `}
      >
        <div
          className="centerSelf"
          css={css`
            position: absolute;
            left: 50%;
            top: 1em;

            ${smBreak} {
              display: none;
            }

            a {
              position: relative;
              left: -50%;
            }
          `}
        >
          <Link to="/" css={noHover}>
            <Logo type="standardLogo" />
          </Link>
        </div>

        <div
          className="centerSelf"
          css={css`
            position: absolute;
            top: 1em;
            left: 50%;

            ${mdBreak} {
              display: none;
            }

            a {
              position: relative;
              left: -50%;
            }
          `}
        >
          <Link to="/" css={noHover}>
            <Logo type="squareLogo" />
          </Link>
        </div>

        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(3, auto);
            justify-self: end;
            max-width: 300px;
            width: 27vw;
            justify-content: space-between;
            align-content: center;

            ${smBreak} {
              display: none;
            }
          `}
        >
          <button
            type="button"
            className="btn-link"
            onClick={() => {
              goTo("/platform/");
            }}
          >
            <p className="action">Platform</p>
          </button>
          <AboutDropdown goTo={goTo} />
        </div>

        <button
          css={css`
            display: flex;
            flex-direction: column;
            justify-self: end;
            justify-content: center;
            background: none;
            border: none;
            height: max-content;
            align-self: center;
            border-radius: 5px;

            ${focusBorder}

            ${mdBreak} {
              display: none;
            }
          `}
          type="button"
          onClick={toggleDropdown}
        >
          <MenuIcon style={{ fontSize: "2.5rem" }} />
        </button>
      </div>
      <HeaderDropdown
        open={dropdownOpen}
        headerHeight={headerHeight}
        goTo={goTo}
      />
    </Fragment>
  );
};

export default Header;
