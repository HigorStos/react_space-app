import BackgroundGradient from "./containers/BackgroundGradient"
import AppContainer from "./containers/AppContainer"
import MainContainer from "./containers/MainContainer"
import GalleryContent from "./containers/GalleryContent"

import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Banner from "./components/Banner"
import Gallery from "./components/Gallery"

function App() {
  return (
    <BackgroundGradient>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <SideBar />
          <GalleryContent>
            <Banner
              text="A galeria mais completa de fotos do espaço!"
              backgroundImage='./images/banner.png'
            />
            <Gallery />
          </GalleryContent>
        </MainContainer>
      </AppContainer>
    </BackgroundGradient>
  )
}

export default App
