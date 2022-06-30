import { TitleItem, TitleAccent } from './styles'

import { IindicatorProps } from 'types/types'
import useCounter from 'hooks/useCounter'

const SummaryTitle = ({ number, unit, desc }: IindicatorProps) => {
  const count = useCounter(number)

  return (
    <TitleItem>
      <TitleAccent>
        {count}
        {unit}
      </TitleAccent>
      {desc}
    </TitleItem>
  )
}

export default SummaryTitle
