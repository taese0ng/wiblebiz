const theme = {
  colors: {
    white: "#ffffff",
    black: "#000000",
    mint900: "#70d7bf",
    mint700: "#8ddfcc",
    midnight900: "#05141f",
    midnight100: "#cdd0d2",
    red: "#ff0900",
    blue: "#4296e4",
    gray700: "#37434c",
    gray500: "#697278",
    gray400: "#82898f",
    gray300: "#b4b9bc",
    gray200: "#cdd0d2",
    gray100: "#e6e8e9",
    gray50: "#f6f6f9",
    gray10: "#f8f8f8",
  },

  zIndex: {
    header: 100,
    modal: 200,
    dropdown: 300,
    toast: 400,
  },

  lineHeight: {
    sm: "1.4",
    md: "1.6",
    lg: "1.8",
  },
} as const;

export type Theme = typeof theme;

export default theme;
