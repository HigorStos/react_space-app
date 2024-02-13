import Title from "../Title"
import Tags from "./Tags"
import ImagePost from "./ImagePost"
import Popular from "./Popular"

import { GalleryContainer, FluidSection, ImagesContainer } from "./styles"

const Gallery = ({ photos = [], setTag, onPhotoSelected, onFavoriteChange }) => {
  return (
    <>
      <Tags setTag={setTag} />
      <GalleryContainer>
        <FluidSection>
          <Title>Navegue pela galeria</Title>
          <ImagesContainer>
            {photos.map((photo) => (
              <ImagePost
                key={photo.id}
                photo={photo}
                onZoom={onPhotoSelected}
                onFavoriteChange={onFavoriteChange}
              />
            ))}
          </ImagesContainer>
        </FluidSection>
        <Popular />
      </GalleryContainer>
    </>
  )
}

export default Gallery
