/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "gatsby";
import { Logo } from "@hackoregon/ui-brand";
import MenuIcon from "@material-ui/icons/Menu";

import {
  colors,
  shadows,
  smBreak,
  mdBreak,
  xsBreak
} from "../_Theme/UpdatedBrandTheme";

const Header = () => {
  return (
    <div
      css={css`
        height: 90px;
        background-color: ${colors.white};
        box-shadow: ${shadows.bottom};
        display: grid;
        padding: 0 2rem;
        ${xsBreak} {
          padding: 0 1rem;
        }
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
        <Link to="/">
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
        <Link to="/">
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
        <Link to="/platform/">
          <p className="action">Platform</p>
        </Link>
        <Link to="/studios/">
          <p className="action">Studios</p>
        </Link>
        <Link to="/ventures/">
          <p className="action">Ventures</p>
        </Link>
      </div>

      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-self: end;
          justify-content: center;

          ${mdBreak} {
            display: none;
          }
        `}
      >
        <MenuIcon style={{ fontSize: "2.5rem" }} />
      </div>
    </div>
  );
};

export default Header;
