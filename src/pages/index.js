/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "gatsby";
import { Button } from "@hackoregon/ui-core";
import { Logo } from "@hackoregon/ui-brand";
import { Grid, AppBar, Toolbar, Box } from "@material-ui/core";

import Image from "../components/Image";
import SEO from "../components/SEO";
import Wrapper from "../components/Wrapper";

const IndexPage = () => {
  return (
    <Wrapper>
      <SEO
        title="Civic Software Foundation"
        keywords={[`hack oregon`, `civic`, `data`]}
      />
      <AppBar color="transparent" elevation={0} position="absolute">
        <Toolbar>
          <Box mx="auto" pt={1}>
            <Logo type="squareLogo" />
          </Box>
        </Toolbar>
      </AppBar>
      <Grid container spacing={0}>
        <Grid container xs={12}>
          <Grid item xs={1} md={4}>
            <Box p={8}>
              <Image title="Ven Graph" />
            </Box>
          </Grid>
          <Grid item xs={11} md={8}>
            <Box p={8}>
              <h2
                css={css`
                  background-color: white;
                  outline: 0.25em solid white;
                `}
              >
                Imagine a future where information and technology equitably
                serve the public
              </h2>
              <h3
                css={css`
                  background-color: white;
                  outline: 0.25em solid white;
                `}
              >
                We&apos;re building teams, technology, and process to get there
                quickly.
              </h3>
              <h3
                css={css`
                  background-color: white;
                  outline: 0.25em solid white;
                `}
              >
                You can be a part of it.
              </h3>
              <Grid container xs={12} justify="space-around">
                <Link
                  to="/projects/"
                  css={css`
                    background-size: 0% 2px !important;
                  `}
                >
                  <Button>Explore The Platform</Button>
                </Link>
                <Link
                  to="/projects/"
                  css={css`
                    background-size: 0% 2px !important;
                  `}
                >
                  <Button>Scale Your Impact</Button>
                </Link>
                <Link
                  to="/projects/"
                  css={css`
                    background-size: 0% 2px !important;
                  `}
                >
                  <Button>Bring Your Project</Button>
                </Link>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          xs={12}
          spacing={4}
          css={css`
            background-color: white;
          `}
        >
          <Grid item xs={12}>
            <h1
              css={css`
                text-align: center;
                margin-bottom: 0;
              `}
            >
              The CIVIC Difference
            </h1>
            <h2
              css={css`
                text-align: center;
              `}
            >
              People, platform, process, purpose, not propaganda
            </h2>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <h3>Real problems to solve</h3>
              <p>
                We are creating a network of local communities, government, and
                technology to identify problems worth solving.
              </p>
              <p>
                We are training and funding the next cohort of leaders around
                America to empower local communities.
              </p>
            </Box>
            <Box textAlign="center">
              <div className="h-4">
                <Link to="/projects/">More</Link>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <h3>Real deadlines to hit</h3>
              <p>
                Our accelerator program takes good ideas and puts them to the
                test immediately to deliver results in months, not years.
              </p>
              <p>
                Diverse voices and skills power our custom built,
                multidisciplinary teams.
              </p>
            </Box>
            <Box textAlign="center">
              <div className="h-4">
                <Link to="/projects/">More</Link>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <h3>Real impact to make</h3>
              <p>
                Is your institution ready to scale its impact? Act on your data.
                Make your big idea a reality. Fulfill your mission.
              </p>
              <p>
                We want institutional and philanthropic partners who are ready
                to go big.
              </p>
            </Box>
            <Box textAlign="center">
              <div className="h-4">
                <Link to="/projects/">More</Link>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default IndexPage;
