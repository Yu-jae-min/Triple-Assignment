import styled from 'styled-components'

import theme from 'styles/theme'

const AwardItem = styled.li`
  margin-right: 40px;
  ${theme.flexbox('row', 'center', 'center')};
`

const AwardImage = styled.img`
  width: 54px;
  height: 54px;
  margin-right: 8px;
`

const AwardDesc = styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  color: ${theme.colors.title(0.8)};
`

export { AwardItem, AwardImage, AwardDesc }
