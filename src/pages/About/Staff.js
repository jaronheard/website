/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import { Fragment } from "react";

import { colors, noHover } from "../../_Theme/UpdatedBrandTheme";
import GridTrio from "../../components/GridTrio";

const Staff = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { contentfulTeam } = useStaticQuery(
    graphql`
      query {
        contentfulTeam(contentful_id: { eq: "hjY1bbnBNQBvlSD21Me3K" }) {
          name
          members {
            name
            email
            title
            photo {
              fluid(maxWidth: 322) {
                srcSet
                sizes
              }
              title
              description
            }
          }
        }
      }
    `
  );
  return (
    <Fragment>
      <GridTrio title={contentfulTeam.name}>
        {contentfulTeam.members.map(({ name, photo, title, email }) => {
          return (
            <section
              css={css`
                width: 322px;
                height: 400px;
                margin: 4rem 1rem 1rem 1rem;
                display: flex;
              `}
            >
              {photo && (
                <img
                  srcSet={photo.fluid.srcSet}
                  sizes={photo.fluid.sizes}
                  alt={photo.title}
                />
              )}
              <div>
                <div
                  css={css`
                    display: flex;
                    position: relative;
                    top: 360px;
                    left: -312px;
                    height: 80px;
                    width: 322px;
                    justify-content: center;
                  `}
                >
                  <a
                    className="btn"
                    href={`mailto:${email}`}
                    css={[
                      noHover,
                      css`
                        display: block;
                        background-color: ${colors.primary.hex};
                        height: max-content;
                        width: max-content;
                        padding: 0.5rem 1.5rem;
                      `
                    ]}
                  >
                    <p
                      css={css`
                        color: ${colors.white};
                      `}
                    >
                      {name}
                    </p>
                    <span
                      className="h-6"
                      css={css`
                        color: ${colors.white};
                      `}
                    >
                      {title}
                    </span>
                  </a>
                </div>
              </div>
            </section>
          );
        })}
      </GridTrio>
    </Fragment>
  );
};

export default Staff;
