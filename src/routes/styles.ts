import styled from 'styled-components'

import theme from 'styles/theme'

export const AppWrap = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.background};
  ${theme.flexbox('row', 'center', 'center')};
`
