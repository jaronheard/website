// Use with emotion's Global component
import { BrandColors, VisualizationColors } from "@hackoregon/ui-themes";

// Breakpoints
export const smBreak = "@media (max-width:959.95px)";
export const mdBreak = "@media (min-width:959.95px)";
export const lgBreak = "@media (max-width:1279.95px)";

// Colors
export const colors = {
  ...VisualizationColors.categorical,
  ...BrandColors,
  white: "#fff"
};

// Shadows
export const shadows = {
  bottom: "0px 1px 4px rgba(0, 0, 0, 0.4)"
};

// Typography
const body = {
  fontFamily: "Merriweather",
  fontSize: "1.0625rem",
  lineHeight: "1.75rem",
  margin: 0,
  display: "flex",
  flexDirection: "column",
  overflowX: "hidden",
  [smBreak]: {
    fontSize: "1rem",
    lineHeight: "1.5rem"
  }
};

const p = {
  fontSize: "1.0625rem",
  lineHeight: "1.75rem",
  color: BrandColors.tertiary.hex,
  marginBlockStart: "0.875rem",
  marginBlockEnd: "0.875rem",
  [smBreak]: {
    fontSize: "1rem",
    lineHeight: "1.5rem"
  }
};

const pSmall = {
  fontSize: "0.86rem",
  lineHeight: "1.4165rem",
  color: BrandColors.tertiary.hex,
  marginBlockStart: "0.875rem",
  marginBlockEnd: "0.875rem"
};

const pLarge = {
  fontSize: "1.21125rem",
  lineHeight: "1.995rem",
  color: BrandColors.tertiary.hex,
  marginBlockStart: "0.875rem",
  marginBlockEnd: "0.875rem",
  [smBreak]: {
    fontSize: "1.0625rem",
    lineHeight: "1.75rem"
  }
};

const action = {
  ...p,
  fontFamily: "Rubik",
  fontStyle: "normal",
  fontWeight: "normal"
};

const h1 = {
  fontSize: "4rem",
  lineHeight: "1.0375",
  fontFamily: "'Rubik', sans-serif",
  fontWeight: "500",
  marginBlockStart: "4rem",
  marginBlockEnd: "4rem",
  [lgBreak]: {
    fontSize: "3rem",
    marginBlockStart: "3rem",
    marginBlockEnd: "3rem"
  },
  [smBreak]: {
    fontSize: "2rem",
    marginBlockStart: "2rem",
    marginBlockEnd: "2rem"
  }
};

const h2 = {
  fontSize: "2rem",
  lineHeight: "1.10722",
  fontFamily: "'Rubik', sans-serif",
  fontWeight: "400",
  marginBlockStart: "2rem",
  marginBlockEnd: "2rem",
  [smBreak]: {
    fontSize: "1.7rem",
    marginBlockStart: "1.7rem",
    marginBlockEnd: "1.7rem"
  }
};

const h3 = {
  fontSize: "1.5rem",
  lineHeight: "1.381",
  fontFamily: "'Rubik', sans-serif",
  fontWeight: "500",
  marginBlockStart: "1.5rem",
  marginBlockEnd: "1.5rem",
  [smBreak]: {
    fontSize: "1.35rem",
    marginBlockStart: "1.35rem",
    marginBlockEnd: "1.35rem"
  }
};

const h4 = {
  fontSize: "1.25rem",
  lineHeight: "1.381",
  fontFamily: "'Rubik', sans-serif",
  fontWeight: "400",
  marginBlockStart: "1.25rem",
  marginBlockEnd: "1.25rem",
  [smBreak]: {
    fontSize: "1.15rem",
    marginBlockStart: "1.15rem",
    marginBlockEnd: "1.15rem"
  }
};

const h5 = {
  fontSize: "1rem",
  lineHeight: "1.125rem",
  fontFamily: "'Rubik', sans-serif",
  fontWeight: "400",
  marginBlockStart: "1rem",
  marginBlockEnd: "1rem"
};

const h6 = {
  fontSize: "1rem",
  lineHeight: "0.9375rem",
  fontFamily: "'Rubik', sans-serif",
  fontWeight: "300",
  marginBlockStart: "1rem",
  marginBlockEnd: "1rem"
};

const code = {
  fontSize: "0.86rem",
  lineHeight: "1.204rem",
  fontFamily: "'Roboto Mono', sans-serif",
  fontWeight: "300",
  marginBlockStart: "0.28125rem",
  marginBlockEnd: "0.28125rem",
  letterSpacing: "-0.025em",
  backgroundColor: BrandColors.subdued.hex
};

const dataSmall = {
  fontFamily: "Roboto Condensed",
  fontSize: "0.86rem",
  lineHeight: "1.204rem"
};

const data = {
  fontFamily: "Roboto Condensed",
  fontSize: "1rem",
  lineHeight: "1.4rem"
};

const dataLarge = {
  fontFamily: "Roboto Condensed",
  fontSize: "1.14rem",
  lineHeight: "1.596rem"
};

const button = {
  width: "214px",
  height: "50px",
  background: "#FDFDFD",
  border: "5px solid #EE495C",
  boxSizing: "border-box",
  boxShadow: `4px 4px 1px ${VisualizationColors.categorical.pink.hex}`,

  p: {
    ...action,
    margin: 0
  }
};

export default {
  /* Base */

  html: {
    fontSize: "1rem",
    lineHeight: "1.4",
    backgroundColor: BrandColors.background.hex,
    fontFamily: "Merriweather",
    fontWeight: "400",
    color: BrandColors.primary.hex,
    minHeight: "100%" /* [3] */,
    WebkitTextSizeAdjust: "100%" /* [4] */,
    msTextSizeAdjust: "100%" /* [4] */,
    MozOsxFontSmoothing: "grayscale" /* [5] */,
    WebkitFontSmoothing: "antialiased" /* [5] */,
    WebkitOverflowScrolling: "touch",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  },

  a: {
    color: BrandColors.action.hex,
    textDecoration: "none",
    cursor: "pointer",
    transition: "background-size .3s",
    backgroundImage: "linear-gradient(currentColor, currentColor)",
    backgroundPosition: "0% 100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "0% 2px",

    ":hover, :focus": {
      color: BrandColors.action.hex,
      cursor: "pointer",
      backgroundSize: "100% 2px"
    }
  },

  /* Global Styles from product_design */

  /* Typography */

  // Default styles
  body,
  code,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,

  // Class names
  ".p-sm": pSmall,
  ".p-md": p,
  ".p-lg": pLarge,

  ".h-1": h1,
  ".h-2": h2,
  ".h-3": h3,
  ".h-4": h4,
  ".h-5": h5,
  ".h-6": h6,

  ".data-sm": dataSmall,
  ".data-md": data,
  ".data-lg": dataLarge,

  ".code": code,

  ".btn": button,
  ".btn-blue": {
    ...button,
    boxShadow: `4px 4px 1px ${VisualizationColors.categorical.blue.hex}`
  },
  ".btn-purple": {
    ...button,
    boxShadow: `4px 4px 1px ${VisualizationColors.categorical.purple.hex}`
  },
  ".btn-yellow": {
    ...button,
    boxShadow: `4px 4px 1px ${VisualizationColors.categorical.yellow.hex}`
  },
  ".btn-green": {
    ...button,
    boxShadow: `4px 4px 1px ${VisualizationColors.categorical.green.hex}`
  },

  ".action": action,

  ".Description": {
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "left",
    lineHeight: "1.7"
  },

  ".Title": {
    fontSize: "3.57rem",
    lineHeight: "1.2",
    fontWeight: "300",
    fontFamily: "'Rubik', sans-serif",
    marginBottom: "12px"
  },

  ".DataText": {
    fontFamily: "Roboto Condensed",
    fontSize: "0.86rem",
    lineHeight: "1.204rem"
  },

  ".DataFont": {
    fontFamily: "Roboto Condensed"
  },

  ".LargeParagraph": pLarge,

  ".Pullquote": {
    fontSize: "2.85rem"
  },

  ".ShadowBox": {
    maxWidth: "322px",
    margin: "0 15px",
    background: "white",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
    padding: "30px"
  },

  ".centerSelf": {
    justifySelf: "center",
    alignSelf: "center"
  }
};
