import * as S from '../styles/busStopPage'
import BusStop from '../components/BusStop'

const BusStopPage = () => {
  return (
    <S.Layout>
      <S.MainTitle>어느 정류장의 이야기를 해볼까?</S.MainTitle>
      <S.ExplanationText>근처 500m 안에 있는 정류장</S.ExplanationText>
      <S.BusStopContainer>
        <BusStop />
        <BusStop />
        <BusStop />
      </S.BusStopContainer>
      <S.RefreshBtn>새로고침</S.RefreshBtn>
    </S.Layout>
  )
}

export default BusStopPage