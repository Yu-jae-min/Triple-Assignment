import { TitleItem, TitleAccent } from './styles'

import { IindicatorProps } from 'types/types'

const SummaryTitle = ({ number, unit, desc }: IindicatorProps) => {
  return (
    <TitleItem>
      <TitleAccent>
        {number}
        {unit}
      </TitleAccent>
      {desc}
    </TitleItem>
  )
}

export default SummaryTitle
