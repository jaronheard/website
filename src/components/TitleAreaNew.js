/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { PropTypes } from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import { smBreak, colors } from "../_Theme/UpdatedBrandTheme";
import DividerLine from "./DividerLine";

const NewTitleArea = ({
  backgroundImage,
  children,
  dividerLineColor = colors.purple.hex,
  childrenContainerStyle
}) => {
  const { file } = useStaticQuery(graphql`
    query {
      file(base: { eq: "hero__test--graph.png" }) {
        publicURL
      }
    }
  `);

  const defaultBackgroundImage = `url(${file.publicURL})`;

  return (
    <div>
      <picture
        css={css`
          background-image: ${backgroundImage || defaultBackgroundImage};
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: local;
          background-position: center;
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 106%;
          z-index: -2;
          opacity: 0.2;
        `}
      />
      <div
        css={css`
          display: grid;
          align-content: center;
          text-align: left;
          padding: 45px 40px;
          margin-bottom: -90px;
          height: 370px;
          justify-content: stretch;

          ${smBreak} {
            padding: 45px 20px 0;
            margin-bottom: -45px;
          }
          ${childrenContainerStyle}
        `}
      >
        {children}
      </div>
      <DividerLine
        hexColor={dividerLineColor}
        swoopStyle={css`
          margin-bottom: -30px;
          margin-top: 70px;
        `}
        lineStyle={css`
          margin-bottom: 0px;
          height: 50px;
          background-color: white;
        `}
      />
    </div>
  );
};

NewTitleArea.propTypes = {
  backgroundImage: PropTypes.string,
  dividerLineColor: PropTypes.string,
  childrenContainerStyle: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any
};

export default NewTitleArea;
