import {
  HowItWorksWrapper,
  HowItWorksHeader,
  HowItWorksVideo,
  PlayPauseIcon,
  PlayPauseWrapper,
} from './HowItWorksStyles'
import { useRef, useState } from 'react'
import { Title, SubTitle } from '../../styles/GlobalComponents/index.js'
import { subTitle, title } from '../../constants/HowItWorks'
import Fade from 'react-reveal/Fade'
export const HowItWorks = () => {
  const vidRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const handlePlayPauseButton = () => {
    if (isPaused) {
      vidRef.current.pause()
      setIsVisible(true)
      setIsPaused(false)
    } else {
      vidRef.current.play()

      setIsPaused(true)
      setIsVisible(true)
      setTimeout(() => {
        setIsVisible(false)
      }, 2000)
    }
  }
  return (
    <HowItWorksWrapper id="howitworks">
      <HowItWorksHeader>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </HowItWorksHeader>
      <Fade left>
        <HowItWorksVideo
          onClick={handlePlayPauseButton}
          onMouseEnter={() =>
            setTimeout(() => {
              setIsVisible(true)
            }, 2000)
          }
          onMouseLeave={() =>
            isPaused &&
            setTimeout(() => {
              setIsVisible(false)
            }, 2000)
          }
        >
          <video loop muted ref={vidRef}>
            <source src="/videos/video.mp4" type="video/mp4" />
            video html tag doesnt work
          </video>
          <PlayPauseWrapper isVisible={isVisible}>
            <PlayPauseIcon
              isPaused={isPaused}
              onClick={handlePlayPauseButton}
            />
          </PlayPauseWrapper>
        </HowItWorksVideo>
      </Fade>
    </HowItWorksWrapper>
  )
}
