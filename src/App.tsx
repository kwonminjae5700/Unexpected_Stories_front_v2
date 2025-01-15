import RenderingPage from './pages/RenderingPage'
import BusStopPage from './pages/BusStopPage'
import MenuPage from './pages/MenuPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import BusStopBackgroundImage from './assets/BusStopBackgroundImage.png'
import './font.css'

const App = () => {
  return (
    <BrowserRouter>
      <BackgroundBox>
        <Routes>
          <Route path="/" element={<RenderingPage />} />
          <Route path="/busStop" element={<BusStopPage />}/>
          <Route path="menu" element={<MenuPage />}/>
        </Routes>
      </BackgroundBox>
    </BrowserRouter>
  )
}

const BackgroundBox = styled.div`
  display : inline-block;
  width: 100%;
  max-width: 480px;
  height: 100%;
  background-image: url(${BusStopBackgroundImage});
  background-size: 100% 100%;
  margin: 0 auto;
`

export default App
