import TextLabel from '../TextField'
import { StyledHeader } from './styles'

const Header = ({ setFilter }) => {
  return (
    <StyledHeader>
      <img src="./images/logo.png" alt="" />
      <TextLabel setFilter={setFilter} />
    </StyledHeader>
  )
}

export default Header
