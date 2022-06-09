import {
  FeaturesWrapper,
  FeaturesHeader,
  FeaturesTabs,
  FeaturesTab,
  FeaturesTabList,
  FeaturesTabPanel,
} from './FeaturesStyles'
import { Title, SubTitle } from '../../styles/GlobalComponents/index.js'

import { subTitle, title, f1, f2, f3 } from '../../constants/Features'
import Wobble from 'react-reveal/Wobble'
export const Features = () => {
  return (
    <FeaturesWrapper id="features">
      <FeaturesHeader>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </FeaturesHeader>
      <FeaturesTabs>
        <FeaturesTabList>
          <FeaturesTab>{f1.title}</FeaturesTab>
          <FeaturesTab>{f2.title}</FeaturesTab>
          <FeaturesTab>{f3.title}</FeaturesTab>
        </FeaturesTabList>

        <FeaturesTabPanel>
          <Wobble>{f1.desc}</Wobble>
        </FeaturesTabPanel>
        <FeaturesTabPanel>
          {' '}
          <Wobble>{f2.desc}</Wobble>
        </FeaturesTabPanel>
        <FeaturesTabPanel>
          {' '}
          <Wobble>{f3.desc}</Wobble>
        </FeaturesTabPanel>
      </FeaturesTabs>
    </FeaturesWrapper>
  )
}
