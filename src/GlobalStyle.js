import {createGlobalStyle, css} from 'styled-components'

export default createGlobalStyle(css`
  body {
    box-sizing: border-box;
    margin: 0;
  }
  * {
    box-sizing: inherit;
  }

  @media print {
    body {
      font-size: 12px;
    }
  }
`)
