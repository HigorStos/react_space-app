import { StyledFooter, IconContainer, FooterText } from './styles'

const Footer = () => {
  return (
    <StyledFooter>
      <IconContainer>
        <li>
          <a href="https://www.facebook.com/AluraCursosOnline" target="_blank">
            <img src="./images/social/facebook.svg" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/AluraOnline" target="_blank">
            <img src="./images/social/twitter.svg" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/aluraonline" target="_blank">
            <img src="./images/social/instagram.svg" />
          </a>
        </li>
      </IconContainer>
      <FooterText>Desenvolvido por Alura.</FooterText>
    </StyledFooter>
  )
}

export default Footer
