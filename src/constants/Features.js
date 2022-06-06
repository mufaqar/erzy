import Image from 'next/image'
import featuresOne from '../../public/images/features1.png'
import featuresTwo from '../../public/images/features2.png'
import featuresThree from '../../public/images/features3.png'
export const title = 'Features that make Erzy special'
export const subTitle =
  'From finding potential channels for cross-promotion to posting promo posts and generating statistics for every campaign, Erzy will become your favorite tool to promote your Telegram channel.'

export const f1 = {
  title: 'Intuitive dashboard',
  desc: <Image src={featuresOne} />,
}

export const f2 = {
  title: 'Automatically post & delete promo posts',
  desc: <Image src={featuresTwo} />,
}
export const f3 = {
  title: 'Generate statistics for every campaign',
  desc: <Image src={featuresThree} />,
}
