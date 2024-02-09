import styled from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
  display: inline-block;
`

export const StyledTextLabel = styled.input`
  width: 602px;
  height: 56px;
  padding: 12px 16px;
  color: #D9D9D9;
  font-family: sans-serif;
  font-weight: 400px;
  font-size: 20px;
  line-height: 20px;
  border: 2px solid #C98CF1;;
  border-radius: 10px;
  box-sizing: border-box;
  background: transparent;
  outline: none;
  
  &::placeholder {
    color: #D9D9D9;
    font-size: 20px;
    line-height: 20px;
  }
`

export const SearchIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`
