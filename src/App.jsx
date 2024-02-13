import { useState, useEffect } from "react"

import BackgroundGradient from "./containers/BackgroundGradient"
import AppContainer from "./containers/AppContainer"
import MainContainer from "./containers/MainContainer"
import GalleryContent from "./containers/GalleryContent"

import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Banner from "./components/Banner"
import Gallery from "./components/Gallery"
import ModalZoom from "./components/ModalZoom"

import photos from "./fotos.json"
import Footer from "./components/Footer"

const App = () => {
  const [galleryPhotos, setGalleryPhotos] = useState(photos)
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [filter, setFilter] = useState('')
  const [tag, setTag] = useState(0)

  useEffect(() => {
    const filteredPhotos = photos.filter((photo) => {
      const tagFilter = !tag || photo.tagId === tag;
      const titleFilter = !filter || photo.titulo.toLowerCase().includes(filter.toLocaleLowerCase())
      return tagFilter && titleFilter
    })

    setGalleryPhotos(filteredPhotos)
  }, [filter, tag])

  const onFavoriteChange = (photo) => {
    if(photo.id === selectedPhoto?.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        favorite: !selectedPhoto.favorite
      })
    }

    setGalleryPhotos(
      galleryPhotos.map((galleryPhoto) => {
        return {
          ...galleryPhoto,
          favorite: galleryPhoto.id === photo.id ? !photo.favorite : galleryPhoto.favorite
        }
      })
    )
  }

  return (
    <BackgroundGradient>
      <GlobalStyles />
      <AppContainer>
        <Header setFilter={setFilter} />
        <MainContainer>
          <SideBar />
          <GalleryContent>
            <Banner
              text="A galeria mais completa de fotos do espaço!"
              background='./images/banner.png'
            />
            <Gallery
              photos={galleryPhotos}
              onPhotoSelected={photo => setSelectedPhoto(photo)}
              onFavoriteChange={onFavoriteChange}
              setTag={setTag}
            />
          </GalleryContent>
        </MainContainer>
      </AppContainer>
      <Footer />
      <ModalZoom
        photo={selectedPhoto}
        onClosed={() => setSelectedPhoto(null)}
        onFavoriteChange={onFavoriteChange}
      />
    </BackgroundGradient>
  )
}

export default App
