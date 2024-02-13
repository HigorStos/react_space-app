import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 100px;
  background-color: #04244f;
  padding: 22px;
  box-sizing: border-box;
`

export const IconContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: inline-block;
    margin-right: 32px;
  }
`

export const FooterText = styled.p`
  color: #fff;
  font-size: 16px;
  margin: 0;
`
