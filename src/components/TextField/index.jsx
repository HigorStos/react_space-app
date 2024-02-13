import { StyledContainer, StyledTextLabel, SearchIcon } from './styles'

const TextLabel = ({ setFilter }) => {
  return (
    <StyledContainer>
      <StyledTextLabel
        onChange={(e) => setFilter(e.target.value)}
        placeholder='O que você procura?'
        type="text"
      />
      <SearchIcon src='./icons/search.png' alt='Ícone de lupa' />
    </StyledContainer>
  )
}

export default TextLabel
