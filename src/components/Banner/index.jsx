import { StyledFigure, StyledTitle } from "./styles"

const Banner = ({text, background}) => {
  return (
    <StyledFigure background={background}>
      <StyledTitle>
        {text}
      </StyledTitle>
    </StyledFigure>
  )
}

export default Banner
