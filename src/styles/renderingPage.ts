import styled from 'styled-components'

export const RenderLayout = styled.div`
  width: 85%;
  height: 500px;
  display: flex;
  flex-direction : column;
  align-items: center;
  gap : 40px;
  margin : 0 auto;
  padding-top: 120px;
`
export const TitleBox = styled.div`
  display : flex;
  flex-direction: column;
  gap : 1px;
`

export const TitleText = styled.span`
  font-size : 52px;
  font-family : '별빛하늘L';
  color : #fff;
  letter-spacing: .1rem;

`

export const ParagraphBox = styled.div`
`

export const Paragraph = styled.p`
  font-family: '더잠실1';
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 300; 
  line-height: normal;
  color : #FFFFFFCC;
`

export const StartBtn = styled.button`
  width : 58%;
  height : 9.6%;
  background-color: #FFFFFF80;
  border-radius: 36px;
  border : none;
  font-family: '더잠실1';
  font-size : 22px;
  color : #2f6e85;
  margin-top : 40px;
`