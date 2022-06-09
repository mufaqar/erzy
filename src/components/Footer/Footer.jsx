import { footerLinks, footerSocialMedia } from '../../constants/Footer'
import {
  FooterWrapper,
  FooterMain,
  FooterCopyright,
  FooterGroup,
  FooterTitle,
  FooterCategoryTitle,
  FooterLink,
  FooterSubtitle,
  FooterList,
  FooterIconsList,
  FooterIcon,
} from './FooterStyles'

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterMain>
        <FooterGroup>
          <FooterTitle>Erzy</FooterTitle>
          <FooterSubtitle>Don&apos;t compete! Collaborate!</FooterSubtitle>
        </FooterGroup>
        <FooterGroup>
          <FooterCategoryTitle>Erzy</FooterCategoryTitle>
          <FooterList>
            {footerLinks.map((link, idx) => {
              return (
                <FooterLink key={idx} href={link.href}>
                  {link.name}
                </FooterLink>
              )
            })}
          </FooterList>
        </FooterGroup>
        <FooterGroup>
          {' '}
          <FooterCategoryTitle>Connect with us</FooterCategoryTitle>
          <FooterIconsList>
            {footerSocialMedia.map((item, idx) => {
              return (
                <FooterIcon key={idx} href={item.href}>
                  {item.icon}
                </FooterIcon>
              )
            })}
          </FooterIconsList>
        </FooterGroup>
      </FooterMain>
      <FooterCopyright>
        <p>Copyright 2022 - Erzy Inc</p>
      </FooterCopyright>
    </FooterWrapper>
  )
}
