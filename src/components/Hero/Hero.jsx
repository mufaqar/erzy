import {
  HeroWrapper,
  HeroIntro,
  HeroBg,
  HeroTitle,
  HeroButtonText,
  HeroGroup,
} from './HeroStyles'
import Zoom from 'react-reveal/Zoom'

import { Button, SubTitle } from '../../styles/GlobalComponents'
import Image from 'next/image'
import largeHeroBg from '../../../public/images/bigHeroBg.png'
import smallHeroBg from '../../../public/images/smallHeroBg.png'
import useWindowSize from '../../hooks/useWindowSize'
import { mobileSize, erzyBotLink, buttonName } from '../../constants/general'
import { subTitle, title } from '../../constants/Hero'

export const Hero = () => {
  const { width } = useWindowSize()
  return (
    <HeroWrapper id="home">
      <HeroIntro>
        <HeroTitle>{title}</HeroTitle>
        <SubTitle>{subTitle}</SubTitle>
        <HeroGroup>
          <Button main onClick={() => (window.location = `${erzyBotLink}`)}>
            {buttonName}
          </Button>
          <HeroButtonText>Free, no credit card required</HeroButtonText>
        </HeroGroup>
      </HeroIntro>
      <Zoom>
        <HeroBg>
          <Image
            src={width > mobileSize ? largeHeroBg : smallHeroBg}
            alt="erzy team logo"
          />
        </HeroBg>
      </Zoom>
    </HeroWrapper>
  )
}
