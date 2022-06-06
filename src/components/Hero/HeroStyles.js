import styled from 'styled-components'

export const HeroWrapper = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 10rem;
  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  }
`
export const HeroIntro = styled.div`
  width: 50%;
  margin-right: -3rem;
  padding-left: 10rem;
  > * {
    &:not(&:last-child) {
      margin-bottom: 4.8rem;
    }
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    order: 1;
    margin-right: 0;
    padding: 0 4.2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const HeroBg = styled.div`
  img {
    min-width: 100%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    order: -1;
    position: relative;
    left: 2rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    left: 0;
  }
`

export const HeroTitle = styled.h1`
  font-size: 6.4rem;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 4rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    position: relative;
    z-index: 1;
    font-size: 3.4rem;
    margin-top: -3rem;
  }
`
export const HeroButtonText = styled.h6`
  color: #cccccc;
  font-size: 1.2rem;
  font-style: italic;
`
export const HeroGroup = styled.div`
  > * {
    &:not(&:last-child) {
      margin-bottom: 0.5rem;
    }
  }
`
