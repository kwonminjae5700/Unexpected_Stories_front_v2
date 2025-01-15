import styled from "styled-components"

export const Layout = styled.div`
  display : flex;
  flex-direction : row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width : 100%;
  height : 26%;
  background-color : #FFFFFF3D;
  border-radius: 16px;
  padding : 0 16px;
`

// DistanceText 랑 font-family 차이라서 props 로 font-family 전달하고
// 컴포넌트 하나로 합치는게 좋을듯
export const BusStopTitle = styled.h3`
  font-family : '더잠실3';
  font-size : 22px;
  color : #FFFFFF;
`

export const DistanceText = styled.h4`
  font-family : '더잠실2';
  font-size : 22px;
  color : #FFFFFF;
`