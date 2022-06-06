import {
  BenefitsWrapper,
  BenefitsHeader,
  BenefitsList,
  BenefitsItem,
  BenefitsItemImage,
  BenefitsItemTitle,
  BenefitsItemText,
  BenefitsGroup,
  TitleWrapper,
} from './BenefitsStyles.js'
import { Title, SubTitle } from '../../styles/GlobalComponents/index.js'
import Image from 'next/image'
import benefitOne from '../../../public/images/Benefits1.png'
import benefitTwo from '../../../public/images/Benefits2.png'
import benefitThree from '../../../public/images/Benefits3.png'
import benefitFour from '../../../public/images/Benefits4.png'
import { subTitle, title, b1, b2, b3, b4 } from '../../constants/Benefits.js'

export const Benefits = () => {
  return (
    <BenefitsWrapper id="benefits">
      <BenefitsHeader>
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>

        <SubTitle>{subTitle}</SubTitle>
      </BenefitsHeader>
      <BenefitsList>
        <BenefitsGroup>
          <BenefitsItem>
            <BenefitsItemImage>
              <Image src={benefitOne} />
            </BenefitsItemImage>
            <BenefitsItemTitle>{b1.title}</BenefitsItemTitle>
            <BenefitsItemText>{b1.desc}</BenefitsItemText>
          </BenefitsItem>
          <BenefitsItem>
            <BenefitsItemImage>
              <Image src={benefitTwo} />
            </BenefitsItemImage>
            <BenefitsItemTitle>{b2.title}</BenefitsItemTitle>
            <BenefitsItemText>{b2.desc}</BenefitsItemText>
          </BenefitsItem>
        </BenefitsGroup>

        <BenefitsGroup>
          <BenefitsItem>
            <BenefitsItemImage>
              <Image src={benefitThree} />
            </BenefitsItemImage>
            <BenefitsItemTitle>{b3.title}</BenefitsItemTitle>
            <BenefitsItemText>{b3.desc}</BenefitsItemText>
          </BenefitsItem>
          <BenefitsItem>
            <BenefitsItemImage>
              <Image src={benefitFour} />
            </BenefitsItemImage>
            <BenefitsItemTitle>{b4.title}</BenefitsItemTitle>
            <BenefitsItemText>{b4.desc}</BenefitsItemText>
          </BenefitsItem>
        </BenefitsGroup>
      </BenefitsList>
    </BenefitsWrapper>
  )
}
