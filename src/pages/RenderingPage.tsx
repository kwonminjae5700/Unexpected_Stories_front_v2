import * as S from '../styles/render'

const RenderingPage = () => {
  return (
    <S.RenderLayout>
      <S.TitleBox>
        <S.TitleText>어쩌다</S.TitleText>
        <S.TitleText>발견한</S.TitleText>
        <S.TitleText>이야기</S.TitleText>
      </S.TitleBox>

      <S.ParagraphBox>
        <S.Paragraph>우리 동네를 스쳐 지나가는 사람들,</S.Paragraph>
        <S.Paragraph>그들이 주인공이 되어 들려주는 이야기.</S.Paragraph>
      </S.ParagraphBox>

      <S.StartBtn>시작하기</S.StartBtn>
    </S.RenderLayout>
  )

}

export default RenderingPage
