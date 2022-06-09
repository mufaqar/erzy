import {
  AboutWrapper,
  AboutHeader,
  AboutTitle,
  AboutGrid,
  AboutGridItem,
  AboutGridItemInner,
  AboutGritItemTitle,
  AboutGridItemCount,
  AboutGridItemTrace,
} from './AboutStyles'
import { Title, SubTitle } from '../../styles/GlobalComponents/index.js'
import Zoom from 'react-reveal/Zoom'
import Bounce from 'react-reveal/Bounce'
import Image from 'next/image'
import about1 from '../../../public/images/about1.png'
import { aboutItems, subTitle, title } from '../../constants/About'
export const About = () => {
  return (
    <AboutWrapper id="about">
      <AboutHeader>
        <AboutTitle>
          <Title>{title}</Title>
        </AboutTitle>
        <SubTitle>{subTitle}</SubTitle>
      </AboutHeader>

      <AboutGrid>
        <AboutGridItem>
          <AboutGridItemInner>
            <Bounce>
              <Image src={about1} alt="ilustation"/>
            </Bounce>
          </AboutGridItemInner>
          <AboutGridItemTrace />
          <AboutGridItemTrace />
          <AboutGridItemTrace />
          <AboutGridItemTrace />
        </AboutGridItem>

        {aboutItems.map((item, idx) => {
          return (
            <AboutGridItem key={idx}>
              <AboutGridItemInner>
                <Zoom>
                  <Image src={item.icon} alt="ilustation"/>
                </Zoom>

                <AboutGridItemCount>{item.count}</AboutGridItemCount>
              </AboutGridItemInner>
              <AboutGritItemTitle>{item.name}</AboutGritItemTitle>
            </AboutGridItem>
          )
        })}
      </AboutGrid>
    </AboutWrapper>
  )
}
