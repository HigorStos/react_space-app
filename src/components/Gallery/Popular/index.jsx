import Title from "../../Title"

import { PhotosColumn, Image, Button } from "./styles"

import photos from "./popular-photos.json"

const Popular = () => {
  return (
    <section>
      <Title $align="center">Populares</Title>
      <PhotosColumn>
        {photos.map((photo) => (
          <Image key={photo.id} src={photo.path} alt={photo.alt} />
        ))}
      </PhotosColumn>
      <Button>Ver mais</Button>
    </section>
  )
}

export default Popular
