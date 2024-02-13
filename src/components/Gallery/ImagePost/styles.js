import styled from "styled-components";

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  margin: 0;
  max-width: 100%;
  width: ${(props) => (props.$expanded ? '90%' : '460px')};
  
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }

  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    
    h3 {
      margin: 0;
      font-size: 20px;
      font-family: 'GandhiSansBold';
    }

    h4 {
      flex-grow: 1;
      margin: 0;
      font-size: 16px;
      font-weight: normal;
    }
  }
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
