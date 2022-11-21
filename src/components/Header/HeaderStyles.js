import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  overflow: hidden;
  margin-bottom: 5vh;
  position: relative;
  z-index: 1;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: row;
  }
`
export const HeaderLogo = styled.div`
  margin-right: 1rem;
  user-select: none;
`

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`
export const MobileMenu = styled.nav`
  display: none;
  @media ${(props) => props.theme.breakpoints.md} {
    display: block;
    position: fixed;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) => props.theme.colors.gradient1};
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
    transition: 0.3s ease transform;
  }
`
export const NavList = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 6vw;
  > * {
    &:not(&:last-child) {
      margin-right: 2.5vw;
    }
  }
  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  }
`

export const MobileMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  > * {
    &:not(&:last-child) {
      margin-bottom: 2rem;
    }
  }
`

export const NavItem = styled.li`
  flex-shrink: 0;

  a {
    color: ${(props) => props.theme.colors.primary1};
    transition: 0.3s ease color;
    &:hover {
      color: ${(props) => props.theme.colors.secondary1};
    }
  }
`
export const MobileMenuItem = styled.li`
  border-bottom: 5px solid transparent;
  transition: 0.3s ease all;

  a {
    font-size: 3rem;
    font-family: ${(props) => props.theme.fonts.title};
    color: #effffa;
    font-weight: 700;
  }
  &:hover {
    border-color: #effffa;
  }
`

export const Burger = styled.button`
  display: none;
  flex-direction: column;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 9;
  > * {
    &:not(&:last-child) {
      margin-bottom: 0.9rem;
    }
  }
  &:focus {
    outline: none;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
  }
  div {
    width: 4rem;
    height: 0.4rem;
    background: ${(props) =>
      props.open ? '#EFFFFA' : `${props.theme.colors.accent1}`};
    border-radius: 10px;
    transition: all 0.5s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      align-self: flex-end;
      width: 80%;
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    position: ${({ open }) => open && 'absolute'};
    top: 5%;
    right: 5%;
  }
`




// ******************
// bio Header 
// *****************

export const BHeader = styled.div`
  /* height: 80px; */
  background: linear-gradient(70.91deg, #07A3B2 0%, #667EEA 100%);
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 0 2rem;
  ._profile{
    width: 95px;
    height: 95px;
    border-radius: 100%;
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
    top: 4.5rem;
    padding: 5px;
    background: #fff;
   
  }
  ._hamburger{
    font-size: 3.5rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    a{
      margin: 0 .5rem;
      color: white;
      font-size: 22px;
      cursor: pointer;
      
    }
    i{
      margin-left: 1.5rem;
      margin-top: 6px;
    }
  }
  .logo{
    cursor: pointer;
  }
  @media (max-width: 768px) {
    padding-bottom: 2rem;
    ._profile{
      top: 6.5rem;
    }
    
  }
`