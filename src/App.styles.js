import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  :root {
    --darkBlue: hsl(209, 23%, 22%);
    --veryDarkBlue: hsl(207, 26%, 17%);
    --veryDarkBlueText: hsl(200, 15%, 8%);
    --darkGray: hsl(0, 0%, 52%);
    --veryDarkGray: hsl(0, 0%, 98%);
    --white: hsl(0, 0%, 100%);

    --font: 'Nunito Sans', sans-serif;
    --max-width: 1200px;
    --shadow: 0 2px 9px rgba(0, 0, 0, 0.2);
  }

  body {
    margin: 0;
    overflow-x: hidden;
    font-family: var(--font);
    background-color:  ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.fontColor};
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
