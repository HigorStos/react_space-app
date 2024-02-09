import styled from "styled-components";

export const StyledFigure = styled.figure`
  display: flex;
  align-items: center;
  max-width: 100%;
  min-height: 328px;
  margin: 0;
  border-radius: 20px;
  background-image: ${ props => `url(${props.backgroundImage})` };
  background-repeat: no-repeat;
  background-size: cover;
`

export const StyledTitle = styled.h1`
  max-width: 300px;
  padding: 0 64px;
  color: #fff;
  font-size: 40px;
  font-weight: 400px;
  line-height: 48px;
`

