import styled from "styled-components"

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 22px;
  margin-bottom: 30px;
  color: ${ props => props.$active ? '#7b78e5' : '#d9d9d9' };
  font-family: ${ props => props.$active ? 'GandhiSansBold' : 'GandhiSansRegular' };
  font-size: 24px;
  line-height: 29px;
  cursor: pointer;
`

const NavItem = ({children, activeIcon, inactiveIcon, active = false}) => {
  return (
    <StyledListItem $active={active}>
      <img src={active ? activeIcon : inactiveIcon} alt="" />
      {children}
    </StyledListItem>
  )
}

export default NavItem
