import styled from "styled-components"
import Airplan from '../assets/paper-airplane.svg'

export const BlurLayout = styled.div`
  width : 100%;
  height : 100%;
  background-color : #000000AD;
`

export const MainTitle = styled.div`
  font-family : '별빛하늘L';
  font-size : 38px;
  color : #fff;
  margin-top : 71px;
  text-align : center;
`

export const ContentLayout = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  gap : 26px;
  width : 80%;
  height : 70%;
  margin : 70px auto;
`

export const AirplanImg = styled.img.attrs({
  src : Airplan,
  alt : 'airplan'
})`
  width : 60%;
  height : 40%;
`

export const BtnBox = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  gap : 16px;
  margin-top : 20px;
  width : 100%;
`