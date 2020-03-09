/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "gatsby";
import { Logo } from "@hackoregon/ui-brand";
import { BrandColors } from "@hackoregon/ui-themes";
import { AppBar, Toolbar, Box, Grid } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar
      color="transparent"
      elevation={0}
      position="absolute"
      css={css`
        border-bottom: 2px solid ${BrandColors.primary.hex};
      `}
    >
      <Toolbar>
        <Grid container xs={12}>
          <Grid item xs={5} />
          <Grid item xs={2}>
            <Link to="/">
              <Box textAlign="center" mt={1}>
                <Logo type="squareLogo" />
              </Box>
            </Link>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={1}>
            <Link to="/platform/">
              <Box textAlign="center">
                <h3>Platform</h3>
              </Box>
            </Link>
          </Grid>
          <Grid item xs={1}>
            <Link to="/studios/">
              <Box textAlign="center">
                <h3>Studios</h3>
              </Box>
            </Link>
          </Grid>
          <Grid item xs={1}>
            <Link to="/ventures/">
              <Box textAlign="center">
                <h3>Ventures</h3>
              </Box>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
