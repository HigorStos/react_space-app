import styled from "styled-components";


export const TagsContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 56px;
`

export const TagTitle = styled.h3`
  color: #D9D9D9;
  font-size: 24px;
  margin: 0;
`

export const Tag = styled.button`
  color: #FFFFFF;
  font-size: 24px;
  padding: 12px;
  border: 2px solid transparent;
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.3);
  transition: background-color 0.3s ease;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
      border-color: #C98CF1;
    }
`
