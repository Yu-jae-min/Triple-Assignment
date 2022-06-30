import styled from 'styled-components'

import theme from 'styles/theme'

const TitleItem = styled.li`
  margin-bottom: 20px;
  font-size: 36px;
  color: ${theme.colors.title(1)};
`

const TitleAccent = styled.strong`
  font-weight: bold;
`

export { TitleItem, TitleAccent }
