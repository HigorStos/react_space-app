import TextLabel from '../TextField'
import { StyledHeader } from './styles'

const Header = () => {
  return (
    <StyledHeader>
      <img src="./images/logo.png" alt="" />
      <TextLabel />
    </StyledHeader>
  )
}

export default Header
