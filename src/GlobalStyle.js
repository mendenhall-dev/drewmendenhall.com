import {createGlobalStyle, css} from 'styled-components'

export default createGlobalStyle(css`
  body {
    box-sizing: border-box;
    margin: 0;

    @media print {
      font-size: 12px;
    }

    @media screen and (prefers-color-scheme: dark) {
      background: black;
      color: white;
    }
  }
  * {
    box-sizing: inherit;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`)
