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
import { subTitle, title, benefitsList } from '../../constants/Benefits.js'
import Bounce from 'react-reveal/Bounce'

const middleIndex = Math.ceil(benefitsList.length / 2)
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
          {benefitsList
            .slice()
            .splice(0, middleIndex)
            .map((item, idx) => {
              return (
                <Bounce key={idx}>
                  <BenefitsItem>
                    <BenefitsItemImage>
                      <Image src={item.icon} alt="ilustation" />
                    </BenefitsItemImage>
                    <BenefitsItemTitle>{item.title}</BenefitsItemTitle>
                    <BenefitsItemText>{item.desc}</BenefitsItemText>
                  </BenefitsItem>
                </Bounce>
              )
            })}
        </BenefitsGroup>

        <BenefitsGroup>
          {benefitsList
            .slice()
            .splice(-middleIndex)
            .map((item, idx) => {
              return (
                <Bounce key={idx}>
                  <BenefitsItem>
                    <BenefitsItemImage>
                      <Image src={item.icon} alt="ilustation" />
                    </BenefitsItemImage>
                    <BenefitsItemTitle>{item.title}</BenefitsItemTitle>
                    <BenefitsItemText>{item.desc}</BenefitsItemText>
                  </BenefitsItem>
                </Bounce>
              )
            })}
        </BenefitsGroup>
      </BenefitsList>
    </BenefitsWrapper>
  )
}
