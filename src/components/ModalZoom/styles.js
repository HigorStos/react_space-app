import styled from "styled-components"

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
`

export const StyledDialog = styled.dialog`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 294px;
  width: 1156px;
  padding: 0;
  border: 0;
  background-color: transparent;

  form {
    button {
      position: relative;
      top: 20px;
      right: 60px;
      cursor: pointer;
    }
  }
`
