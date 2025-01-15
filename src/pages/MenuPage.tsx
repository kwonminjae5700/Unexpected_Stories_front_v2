import BusStop from '../components/BusStop'
import MenuBtn from '../components/MenuBtn'
import * as S from '../styles/menuPage'


const MenuPage = () => {
  return (
    <S.BlurLayout>
      <S.MainTitle>어쩌다 발견한 이야기</S.MainTitle>
      <S.ContentLayout>
        <S.AirplanImg />
        <BusStop />
        <S.BtnBox>
          <MenuBtn />
          <MenuBtn />
          <MenuBtn />
        </S.BtnBox>
      </S.ContentLayout>
    </S.BlurLayout>
  )
}

export default MenuPage