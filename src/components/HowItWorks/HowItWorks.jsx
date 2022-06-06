import {
  HowItWorksWrapper,
  HowItWorksHeader,
  HowItWorksVideo,
} from './HowItWorksStyles'
import { Title, SubTitle } from '../../styles/GlobalComponents/index.js'
import { subTitle, title } from '../../constants/HowItWorks'
export const HowItWorks = () => {
  return (
    <HowItWorksWrapper id="howitworks">
      <HowItWorksHeader>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </HowItWorksHeader>
      <HowItWorksVideo>
        <iframe
          src="https://www.youtube.com/embed/f-Bx7yonHQI?controls=0"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </HowItWorksVideo>
    </HowItWorksWrapper>
  )
}
