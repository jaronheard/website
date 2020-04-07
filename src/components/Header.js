/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
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
  focusBorder,
  maxContentWidth
} from "../_Theme/UpdatedBrandTheme";

const headerHeight = "45px";
const headerContainer = css`
  background-color: ${colors.primary.hex};
  border-bottom: 0px solid ${colors.plumLight.hex};
  z-index: 100;
`;
const headerGrid = css`
  height: ${headerHeight};
  display: grid;
  margin: 0 auto;
  padding: 0 2rem;
  ${xsBreak} {
    padding: 0 1rem;
  }
  ${maxContentWidth}
`;
const logoContainer = css`
  position: absolute;
  left: 50%;
  top: 0.5em;

  a {
    position: relative;
    left: -50%;
    img {
      height: 38px !important;
      margin-top: -3px;
    }
  }
`;

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
    <div css={headerContainer}>
      <div css={headerGrid}>
        <div
          className="centerSelf"
          css={[
            logoContainer,
            css`
              ${smBreak} {
                display: none;
              }
            `
          ]}
        >
          <Link to="/" css={noHover}>
            <Logo type="standardLogoInverted" />
          </Link>
        </div>

        <div
          css={[
            logoContainer,
            css`
              ${mdBreak} {
                display: none;
              }
            `
          ]}
        >
          <Link to="/" css={noHover}>
            <Logo type="squareLogoInverted" />
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
            className="headerButton"
            css={css`
              margin: 0;
            `}
            onClick={() => {
              goTo("/platform/");
            }}
          >
            <h3
              css={css`
                color: white;
                margin: 0;
              `}
            >
              Platform
            </h3>
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
            color: white;

            ${focusBorder}

            ${mdBreak} {
              display: none;
            }
          `}
          type="button"
          onClick={toggleDropdown}
        >
          <MenuIcon
            css={css`
              font-size: 2.5rem;
            `}
          />
        </button>
      </div>
      <HeaderDropdown
        open={dropdownOpen}
        headerHeight={headerHeight}
        goTo={goTo}
      />
    </div>
  );
};

export default Header;
