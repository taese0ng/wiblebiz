import { css } from "@emotion/react";

const globalStyle = css`
  :root {
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;

    background-color: white;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
  }

  li {
    list-style: none;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  p {
    margin: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export default globalStyle;
