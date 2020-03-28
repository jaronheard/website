// Use with emotion's Global component
import { BrandColors, VisualizationColors } from "@hackoregon/ui-themes";

// Breakpoints
export const xsBreak = "@media (max-width:659.95px)";
export const smBreak = "@media (max-width:959.95px)";
export const mdBreak = "@media (min-width:959.95px)";
export const lgCardBreak = "@media (max-width:1230px)";
export const lgBreak = "@media (max-width:1260px)";

// Colors
export const colors = {
  ...VisualizationColors.categorical,
  ...BrandColors,
  white: "#fff"
};

// Shadows
export const shadows = {
  bottom: `0px 3px 0px #AAA4AB`,
  rightDown: `6px 6px 0px #AAA4AB`
};

export const borders = {
  box: `4px solid ${BrandColors.subdued.hex}`
};

export const noHover = {
  ":hover, :focus": {
    backgroundSize: "0% 3px"
  }
};

export const focusBorder = {
  ":hover, :focus": {
    outline: "none",
    boxShadow: `0px 0px 5px ${colors.blue.hex}`
  }
};

export const underlineFocus = {
  transition: "background-size .2s",
  backgroundImage: "linear-gradient(currentColor, currentColor)",
  backgroundPosition: "0% 100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "0% 3px",

  "&:focus": {
    outline: "none"
  },

  ":hover, :focus": {
    color: BrandColors.action.hex,
    cursor: "pointer",
    backgroundSize: "100% 3px"
  }
};

// Typography
const body = {
  fontFamily: "Roboto",
  fontSize: "1.0625rem",
  lineHeight: "1.765rem",
  margin: 0,
  display: "flex",
  flexDirection: "column",
  overflowX: "hidden",
  [smBreak]: {
    fontSize: "1rem",
    lineHeight: "1.5rem"
  }
};

const a = {
  color: BrandColors.action.hex,
  textDecoration: "none",
  cursor: "pointer",
  transition: "background-size .2s",
  backgroundImage: "linear-gradient(currentColor, currentColor)",
  backgroundPosition: "0% 100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "0% 3px",

  "&:focus": {
    outline: "none"
  },

  ":hover, :focus": {
    color: BrandColors.action.hex,
    cursor: "pointer",
    backgroundSize: "100% 3px"
  }
};

const p = {
  fontSize: "1.0625rem",
  lineHeight: "1.765rem",
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
  marginBlockStart: "0.875rem",
  marginBlockEnd: "0.875rem"
};

const pLarge = {
  fontSize: "1.21125rem",
  lineHeight: "1.995rem",
  marginBlockStart: "0.875rem",
  marginBlockEnd: "0.875rem",
  [smBreak]: {
    fontSize: "1.0625rem",
    lineHeight: "1.75rem"
  }
};

const input = {
  paddingLeft: "10px",
  paddingRight: "10px",
  color: BrandColors.tertiary.hex,
  fontSize: "1.0625rem",
  [smBreak]: {
    fontSize: "1rem",
    lineHeight: "1.5rem"
  },

  "&:focus": {
    outline: "none",
    border: `3px solid ${colors.blue.hex}`
  },

  "::placeholder": {
    color: colors.plumLight.hex
  }
};

const action = {
  ...p,
  fontFamily: "Rubik",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "1.25rem"
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
  fontSize: "2.5rem",
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

// Same as h2 but text shrinks faster.
export const h2Subtitle = {
  fontSize: "2.5rem",
  lineHeight: "1.10722",
  fontFamily: "'Rubik', sans-serif",
  fontWeight: "400",
  marginBlockStart: "2rem",
  marginBlockEnd: "2rem",
  [lgBreak]: {
    fontSize: "2rem",
    marginBlockStart: "1.6rem",
    marginBlockEnd: "1.6rem"
  },
  [smBreak]: {
    fontSize: "1.5rem",
    marginBlockStart: "1.5rem",
    marginBlockEnd: "1.5rem"
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
  width: "250px",
  height: "50px",
  background: colors.primary.hex,
  border: "none",
  boxSizing: "border-box",
  boxShadow: `6px 6px 0px ${VisualizationColors.categorical.pink.hex}`,
  transition: "all .1s ease-in-out-circ",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 10,
  marginBottom: "6px",

  p: {
    ...action,
    margin: 0,
    color: "white"
  },

  "&:focus": {
    outline: "none"
  },

  "&:hover,:focus": {
    cursor: "pointer",
    boxShadow: `3px 3px 0px ${VisualizationColors.categorical.pink.hex}`
  }
};

const strong = {
  fontWeight: 600
};

const b = strong;

export default {
  /* Base */

  html: {
    fontSize: "1rem",
    lineHeight: "1.4",
    backgroundColor: BrandColors.background.hex,
    fontFamily: "Roboto",
    fontWeight: "400",
    color: BrandColors.primary.hex,
    minHeight: "100%" /* [3] */,
    WebkitTextSizeAdjust: "100%" /* [4] */,
    msTextSizeAdjust: "100%" /* [4] */,
    MozOsxFontSmoothing: "grayscale" /* [5] */,
    WebkitFontSmoothing: "antialiased" /* [5] */,
    WebkitOverflowScrolling: "touch",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    overflowX: "hidden"
  },

  /* Global Styles from product_design */

  /* Typography */

  // Default styles
  body,
  code,
  a,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  strong,
  b,

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
  ".a": a,

  ".btn": button,
  ".btn-pink": button,
  ".btn-blue": {
    ...button,
    boxShadow: `6px 6px 0px ${VisualizationColors.categorical.blue.hex}`,
    "&:hover,:focus": {
      cursor: "pointer",
      boxShadow: `3px 3px 0px ${VisualizationColors.categorical.blue.hex}`
    }
  },
  ".btn-purple": {
    ...button,
    boxShadow: `6px 6px 0px ${VisualizationColors.categorical.purple.hex}`,
    "&:hover,:focus": {
      cursor: "pointer",
      boxShadow: `3px 3px 0px ${VisualizationColors.categorical.purple.hex}`
    }
  },
  ".btn-yellow": {
    ...button,
    boxShadow: `6px 6px 0px ${VisualizationColors.categorical.yellow.hex}`,
    "&:hover,:focus": {
      cursor: "pointer",
      boxShadow: `3px 3px 0px ${VisualizationColors.categorical.yellow.hex}`
    }
  },
  ".btn-green": {
    ...button,
    boxShadow: `6px 6px 0px ${VisualizationColors.categorical.green.hex}`,
    "&:hover,:focus": {
      cursor: "pointer",
      boxShadow: `3px 3px 0px ${VisualizationColors.categorical.green.hex}`
    }
  },

  ".action": action,

  ".btn-link": {
    cursor: "pointer",
    background: "none",
    border: "none",
    ...underlineFocus,
    ...action
  },

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

  ".GridListContent": {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    margin: "25px auto",
    gridRowGap: "30px",
    gridColumnGap: "45px",
    justifyContent: "space-between",

    [lgCardBreak]: {
      gridTemplateRows: "1fr 1fr 1fr",
      gridRowGap: "20px"
    },

    [smBreak]: {
      justifyItems: "center",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr 1fr 1fr",
      gridRowGap: "20px",
      width: "auto",
      padding: "0 10px"
    }
  },

  ".ShadowBox": {
    maxWidth: "322px",
    width: "100%",
    background: "white",
    border: borders.box,
    boxShadow: shadows.rightDown,
    display: "grid",

    [xsBreak]: {
      width: "calc(100% - 20px)"
    }
  },

  ".ShadowBoxContent": {
    padding: "30px"
  },

  ".ShadowBoxFooter": {
    alignItems: "end",
    display: "grid",
    overflow: "hidden",

    "> ul": {
      display: "grid",
      gridAutoFlow: "column",
      justifyContent: "space-around",
      gridAutoColumns: "max-content",
      gridColumnGap: "5px"
    },

    "> ul > li > p": {
      ...pSmall,
      margin: "0.25rem 0"
    },

    "> p": {
      display: "none"
    }
  },

  ".GridListCard": {
    [lgCardBreak]: {
      width: "100%"
    },

    [mdBreak]: {
      margin: "15px"
    },

    [xsBreak]: {
      width: "250px"
    },

    "&. WideContent": {
      [mdBreak]: {
        width: "80%"
      },
      [xsBreak]: {
        width: "99vw",
        margin: "0"
      }
    }
  },

  ".DividerLineStyle": {
    zIndex: -1
  },

  ".centerSelf": {
    justifySelf: "center",
    alignSelf: "center"
  },

  ".headerButton": {
    background: "none",
    border: "none",
    padding: "0",
    cursor: "pointer",
    margin: "15px 0",
    ...underlineFocus,

    "> h3": {
      margin: "0"
    }
  }
};
