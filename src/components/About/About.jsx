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
import Image from 'next/image'
import about1 from '../../../public/images/about1.png'
import about2 from '../../../public/images/about2.png'
import about3 from '../../../public/images/about3.png'
import about4 from '../../../public/images/about4.png'
import about5 from '../../../public/images/about5.png'
import { subTitle, title } from '../../constants/About'
export const About = () => {
  return (
    <AboutWrapper id="about">
      <AboutHeader>
        <AboutTitle>
          <Title>{title}</Title>
        </AboutTitle>
        <SubTitle>
       {subTitle}
        </SubTitle>
      </AboutHeader>
      <AboutGrid>
        <AboutGridItem>
          <AboutGridItemInner>
            <Image src={about1} />
          </AboutGridItemInner>
          <AboutGridItemTrace />
          <AboutGridItemTrace />
          <AboutGridItemTrace />
          <AboutGridItemTrace />
        </AboutGridItem>
        <AboutGridItem>
          <AboutGridItemInner>
            <Image src={about3} width={150} height={150} />
            <AboutGridItemCount>345</AboutGridItemCount>
          </AboutGridItemInner>
          <AboutGritItemTitle>Channel Joined</AboutGritItemTitle>
        </AboutGridItem>
        <AboutGridItem>
          <AboutGridItemInner>
            <Image src={about2} width={150} height={150} />
            <AboutGridItemCount>735</AboutGridItemCount>
          </AboutGridItemInner>
          <AboutGritItemTitle>Cross Promotion Conducted</AboutGritItemTitle>
        </AboutGridItem>
        <AboutGridItem>
          <AboutGridItemInner>
            <Image src={about4} width={150} height={150} />
            <AboutGridItemCount>24</AboutGridItemCount>
          </AboutGridItemInner>
          <AboutGritItemTitle>Various Niche Categories</AboutGritItemTitle>
        </AboutGridItem>
        <AboutGridItem>
          <AboutGridItemInner>
            <Image src={about5} width={150} height={130} />
            <AboutGridItemCount>2134</AboutGridItemCount>
          </AboutGridItemInner>
          <AboutGritItemTitle>Potential Subscriber</AboutGritItemTitle>
        </AboutGridItem>
      </AboutGrid>
    </AboutWrapper>
  )
}
