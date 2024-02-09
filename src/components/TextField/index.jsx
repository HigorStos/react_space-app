import { StyledContainer, StyledTextLabel, SearchIcon } from './styles'

const TextLabel = () => {
  return (
    <StyledContainer>
      <StyledTextLabel placeholder='O que você procura?' />
      <SearchIcon src='./icons/search.png' />
    </StyledContainer>
  )
}

export default TextLabel
