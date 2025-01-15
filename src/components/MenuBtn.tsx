import styled from "styled-components"

const MenuBtn = () => {
  return (
    <BtnLayout>편지 읽기</BtnLayout>
  )
}

const BtnLayout = styled.button`
  width : 100%;
  height : 70px;
  background-color : #FFFFFF59;
  border : none;
  border-radius : 16px;
  color : #FFFFFF;
  font-family : '더잠실2';
  font-size : 24px;
`

export default MenuBtn