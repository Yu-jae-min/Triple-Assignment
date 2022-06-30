import {
  SummaryWrap,
  SummaryDescWrap,
  SummaryImage,
  SummaryTitleList,
  SummaryAwardsList,
} from './styles'

import SummaryTitle from 'components/SummaryTitle/SummaryTitle'
import SummaryAward from 'components/SummaryAward/SummaryAward'
import { TripleImg, PlayStoreImg, AppleBadgeImg } from 'assets/images'

const Summary = () => {
  return (
    <SummaryWrap>
      <SummaryImage url={TripleImg}>2021년 12월 기준</SummaryImage>
      <SummaryDescWrap>
        <SummaryTitleList>
          <SummaryTitle number={700} unit="만 명" desc="의 여행자" />
          <SummaryTitle number={100} unit="만 개" desc="의 여행 리뷰" />
          <SummaryTitle number={470} unit="만 개" desc="의 여행 일정" />
        </SummaryTitleList>
        <SummaryAwardsList>
          <SummaryAward
            src={PlayStoreImg}
            alt="play-store-badge"
            storeDesc="2018 구글 플레이스토어"
            awardDesc="올해의 앱 최우수상 수상"
          />
          <SummaryAward
            src={AppleBadgeImg}
            alt="app-store-badge"
            storeDesc="2018 애플 앱스토어"
            awardDesc="오늘의 여행앱 선정"
          />
        </SummaryAwardsList>
      </SummaryDescWrap>
    </SummaryWrap>
  )
}

export default Summary
