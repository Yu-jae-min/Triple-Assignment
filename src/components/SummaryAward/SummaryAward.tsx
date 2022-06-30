import { AwardItem, AwardImage, AwardDesc } from './styles'

import { IawardProps } from 'types/types'

const Award = ({ src, alt, storeDesc, awardDesc }: IawardProps) => {
  return (
    <AwardItem>
      <AwardImage src={src} alt={alt} />
      <AwardDesc>
        {storeDesc}
        <br />
        {awardDesc}
      </AwardDesc>
    </AwardItem>
  )
}

export default Award
