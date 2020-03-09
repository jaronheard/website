/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Grid, Box } from "@material-ui/core";

const Contact = () => (
  <Box px={8} my={2}>
    <Grid
      container
      xs={12}
      css={css`
        p {
          margin-bottom: 0;
          margin-top: 0;
        }
      `}
    >
      <Grid item xs={12} md={4}>
        <div
          css={css`
            margin-bottom: 10px;
          `}
        >
          <p className="h-4">Contact</p>
          <a className="p-sm" href="mailto:hi@civicsoftwarefoundation.org">
            hi@civicsoftwarefoundation.org
          </a>
        </div>
      </Grid>
      <Grid item xs={6} md={4}>
        <div>
          <p className="h-4">Creative & Tech HQ</p>
          <p className="p-sm">Portland, OR</p>
          <a className="p-sm" href="tel:5033839131">
            +1-503-383-9131‬
          </a>
        </div>
      </Grid>
      <Grid item xs={6} md={4}>
        <div>
          <div>
            <p className="h-4">Organizational HQ</p>
            <p className="p-sm">Washington, DC</p>
            <a className="p-sm" href="tel:12026641223">
              +1-202-664-1223
            </a>
          </div>
        </div>
      </Grid>
    </Grid>
  </Box>
);

export default Contact;
