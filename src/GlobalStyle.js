import {createGlobalStyle, css} from 'styled-components'

export default createGlobalStyle(css`
  body {
    box-sizing: border-box;
    margin: 0;
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

  @media print {
    body {
      font-size: 12px;
    }
  }
`)
