import { createGlobalStyle } from 'styled-components'

import reset from './base/reset'
import more from './base/more'
import font from './base/fonts'

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${more}
  ${font}
`

export default GlobalStyle
