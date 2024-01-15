import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
  font-size: 16px;
  font-weight: 400;
  line-height: normal;

}

body {
    margin: 0;
    font-family: 'Exo 2', 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: "";
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
  }

  h1,
  h2,
  h3,
  h4 {
    margin-block-start: 0em;
    margin-block-end: 0em;

  }
  
`