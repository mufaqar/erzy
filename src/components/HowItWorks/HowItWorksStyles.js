import styled from 'styled-components'

export const HowItWorksWrapper = styled.section`
  position: relative;
  margin-bottom: 10rem;
  padding: 0 5rem;
  &:after {
    content: '';
    display: block;
    position: absolute;
    background: #eff1ff;
    border-top-left-radius: 10rem;
    top: -100%;
    left: 35%;
    z-index: -1;
    width: 17.8rem;
    height: 17.8rem;
    transform: rotate(-180deg) translateX(-35%);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 1rem;
    &:after {
      display: none;
    }
  }
`

export const HowItWorksHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 55%;
  margin: 0 auto;

  margin-bottom: 10rem;
  > * {
    &:not(&:last-child) {
      margin-bottom: 3.8rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
  }
`
export const HowItWorksVideo = styled.div`
  margin: 0 auto;
  overflow: hidden;
  max-width: 1034px;
  max-height: 634px;
  min-height: 235px;
  border-radius: 3.2rem;
  box-shadow: 10px 20px 50px rgba(0, 0, 0, 0.15);
  position: relative;
  &:before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }
`
