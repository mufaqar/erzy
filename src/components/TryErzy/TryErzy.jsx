import {
  TryErzyWrapper,
  TryErzyImage,
  TryErzyInfo,
  TryErzyButton,
} from './TryErzyStyles'
import { erzyBotLink } from '../../constants/general'
import { Title, SubTitle } from '../../styles/GlobalComponents/index.js'
import image from '../../../public/images/sectionImage.png'
import Image from 'next/image'
import { subTitle, title } from '../../constants/TryErzy'
export const TryErzy = () => {
  return (
    <TryErzyWrapper id="tryerzy">
      <TryErzyImage>
        <Image src={image} objectFit="cover" />
      </TryErzyImage>
      <TryErzyInfo>
        <Title white>{title}</Title>
        <SubTitle white>{subTitle}</SubTitle>
        <TryErzyButton onClick={() => (window.location = `${erzyBotLink}`)}>
          Set up Erzy Bot for Free!
        </TryErzyButton>
      </TryErzyInfo>
    </TryErzyWrapper>
  )
}
