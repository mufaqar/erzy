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

        <FeaturesTabPanel>{f1.desc}</FeaturesTabPanel>
        <FeaturesTabPanel>{f2.desc}</FeaturesTabPanel>
        <FeaturesTabPanel>
          <div
            style={{
              background: 'linear-gradient(70.91deg, #07A3B2 0%, #667EEA 100%)',
            }}
          >
            <div
              style={{
                background:
                  'linear-gradient(70.91deg, #07A3B2 0%, #667EEA 100%)',
              }}
            >
              {f3.desc}
            </div>
          </div>
        </FeaturesTabPanel>
      </FeaturesTabs>
    </FeaturesWrapper>
  )
}
