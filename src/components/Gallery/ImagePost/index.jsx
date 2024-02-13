import IconButton from "../../IconButton"

import { Figure, Footer } from "./styles"

const ImagePost = ({ photo, expanded = false, onZoom, onFavoriteChange }) => {
  const favoriteIcon = photo.favorite ? './icons/favorito-ativo.png' : './icons/favorito.png'

  return (
    <Figure $expanded={expanded} id={`photo-${photo.id}`}>
      <img src={photo.path} alt={photo.alt} />
      <figcaption>
        <h3>{photo.titulo}</h3>
        <Footer>
          <h4>{photo.fonte}</h4>
          <IconButton onClick={() => onFavoriteChange(photo)}>
            <img src={favoriteIcon} alt="Ícone de favorito" />
          </IconButton>
          {!expanded && <IconButton aria-hidden={expanded} onClick={() => onZoom(photo)}>
            <img src="./icons/expandir.png" alt="Ícone de expandir" />
          </IconButton>}
        </Footer>
      </figcaption>
    </Figure>
  )
}

export default ImagePost
