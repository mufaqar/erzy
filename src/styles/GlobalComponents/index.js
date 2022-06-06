import styled from 'styled-components'
import { keyframes } from 'styled-components'

export const SectionContainer = styled.div``
const shakeButton = keyframes`
0% { transform: rotate(0deg); }
25% { transform: rotate(5deg); }
50% { transform: rotate(0eg); }
75% { transform: rotate(-5deg); }
100% { transform: rotate(0deg); }
}
`

const bounceButton = keyframes`
0%, 100%, 20%, 50%, 80% {
  transform:         translateY(0)
}
40% {
  transform:         translateY(-30px)
}
60% {
  transform:         translateY(-15px)
}
`

export const Button = styled.button`
  cursor: pointer;
  padding: ${(props) => (props.main ? '1.5rem 4.8rem' : '1.2rem 2.8rem')};
  color: #fff;
  border: none;
  outline: none;
  margin: 0;
  font-weight: 700;
  font-size: 1.4rem;
  border-radius: 0.8rem;
  line-height: 2.1rem;
  background: ${(props) => props.theme.colors.gradient1};
  transition: 0.3s ease opacity;
  flex-shrink: 0;

  &:hover {
    animation-name: ${(props) => (props.main ? bounceButton : shakeButton)};
    animation-duration: ${(props) => (props.main ? '1s' : '0.2s')};
    animation-iteration-count: infinite;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.2rem 3rem;
  }
`
export const SubTitle = styled.p`
  font-size: 1.6rem;
`

export const Title = styled.h2`
  display: inline-block;
  font-size: 4rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 3.2rem;
  }
`
