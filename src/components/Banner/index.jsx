import { StyledFigure, StyledTitle } from "./styles"

const Banner = ({text, backgroundImage}) => {
  return (
    <StyledFigure backgroundImage={backgroundImage}>
      <StyledTitle>
        {text}
      </StyledTitle>
    </StyledFigure>
  )
}

export default Banner
