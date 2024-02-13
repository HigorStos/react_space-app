import ImagePost from "../Gallery/ImagePost"
import IconButton from "../IconButton"

import { Overlay, StyledDialog } from "./styles"

const ModalZoom = ({ photo, onClosed, onFavoriteChange }) => {
  return (
    <>
      {photo && <>
        <Overlay />
        <StyledDialog open={!!photo} onClose={onClosed}>
          <ImagePost photo={photo} expanded={true} onFavoriteChange={onFavoriteChange} />
          <form method="dialog">
            <IconButton formMethod="dialog">
              <img src="./icons/fechar.png" alt="Ícone de fechar" />
            </IconButton>
          </form>
        </StyledDialog>
      </>}
    </>
  )
}

export default ModalZoom
