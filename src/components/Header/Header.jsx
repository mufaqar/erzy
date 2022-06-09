import { useState, useEffect } from 'react'
import {
  HeaderWrapper,
  HeaderLogo,
  Navbar,
  NavList,
  NavItem,
  Burger,
  MobileMenu,
  MobileMenuList,
  MobileMenuItem,
} from './HeaderStyles'
import {
  erzyBotLink,
  navItems,
  mobileSize,
  buttonName,
} from '../../constants/general'
import useWindowSize from '../../hooks/useWindowSize'
import { Button } from '../../styles/GlobalComponents'
import largeLogo from '../../../public/images/largeLogo.png'
import smallLogo from '../../../public/images/smallLogo.png'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  const [open, setOpen] = useState(false)
  const { width } = useWindowSize()
  useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflow = open ? 'hidden' : 'auto'
  }, [open])
  return (
    <>
      <HeaderWrapper>
        <HeaderLogo>
          <Image
            src={width > mobileSize ? largeLogo : smallLogo}
            alt="erzy logo"
          />
        </HeaderLogo>
        <Navbar>
          <NavList>
            {navItems.map((item) => {
              return (
                <NavItem key={item.name}>
                  <Link href={item.ref}>{item.name}</Link>
                </NavItem>
              )
            })}
          </NavList>
          <Button onClick={() => (window.location = `${erzyBotLink}`)}>
            {buttonName}
          </Button>
        </Navbar>
        <Burger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </Burger>
      </HeaderWrapper>
      <MobileMenu open={open}>
        <Burger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </Burger>
        <MobileMenuList>
          {navItems.map((item) => {
            return (
              <MobileMenuItem key={item.name} onClick={() => setOpen(false)}>
                <Link href={item.ref}>{item.name}</Link>
              </MobileMenuItem>
            )
          })}
        </MobileMenuList>
      </MobileMenu>
    </>
  )
}
