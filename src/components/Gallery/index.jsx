import Title from "../Title"
import Popular from "./Popular"
import Tags from "./Tags"

import { GalleryContainer, FluidSection } from "./styles"

const Gallery = () => {
  return (
    <>
      <Tags />
      <GalleryContainer>
        <FluidSection>
          <Title>Navegue pela galeria</Title>
        </FluidSection>
        <Popular />
      </GalleryContainer>
    </>
  )
}

export default Gallery
