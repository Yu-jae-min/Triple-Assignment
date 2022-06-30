import styled from 'styled-components'

import { IimageProps } from 'types/types'
import theme from 'styles/theme'

const SummaryWrap = styled.div`
  width: 1200px;
  ${theme.flexbox('row', 'start', 'center')};
`

const SummaryImage = styled.div`
  width: 400px;
  height: 340px;
  padding-top: 280px;
  color: ${theme.colors.title(0.7)};
  font-size: 15px;
  text-align: center;
  background-image: ${({ url }: IimageProps) => `url(${url}) `};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 400px 340px;
  animation-name: ${theme.animations.name};
  ${theme.animations.option('700ms', '0')}
`

const SummaryDescWrap = styled.div`
  padding-left: 225px;
`

const SummaryTitleList = styled.ul`
  animation-name: ${theme.animations.name};
  ${theme.animations.option('700ms', '100ms')}
`

const SummaryAwardsList = styled.ul`
  display: flex;
  margin-top: 50px;
  animation-name: ${theme.animations.name};
  ${theme.animations.option('700ms', '200ms')};
`

export {
  SummaryWrap,
  SummaryImage,
  SummaryDescWrap,
  SummaryTitleList,
  SummaryAwardsList,
}
