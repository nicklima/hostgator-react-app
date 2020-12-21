import { createGlobalStyle } from 'styled-components';
import { theme } from '~/styles/variables';

const GlobalStyles = createGlobalStyle`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
    font-family: 'Montserrat';
    margin: 0;
    padding: 0;
    outline: 0;
    margin: 0;
    padding: 0;
    border: 0;
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  body {
    background: ${theme.background};
  }
`;

export default GlobalStyles;
