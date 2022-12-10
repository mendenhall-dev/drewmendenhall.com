import { css } from 'styled-components'

export const altaUrl = './fonts/Alta_caption.otf'

const fontFaces = css`
@font-face {
  font-family: Alta;
  font-style: normal;
  font-weight: normal;
  src: url(${altaUrl});
}
`

export default fontFaces
