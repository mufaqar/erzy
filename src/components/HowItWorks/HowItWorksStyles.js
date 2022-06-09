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

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 5rem;
    > * {
      &:not(&:last-child) {
        margin-bottom: 2rem;
      }
    }
  }
`
export const HowItWorksVideo = styled.div`
  margin: 0 auto;
  overflow: hidden;
  max-width: 1034px;
  max-height: 634px;
  min-height: 235px;
  cursor: pointer;
  border-radius: 3.2rem;
  box-shadow: 10px 20px 50px rgba(0, 0, 0, 0.15);
  position: relative;
  &:before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    min-height: auto;
  }
`
export const PlayPauseWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 3rem;
  background: #2639ed;
  border-radius: 50%;
  opacity: ${({ isVisible }) => (isVisible ? '0.8' : '0')};
  transition: 0.2s opacity ease;
`
export const PlayPauseIcon = styled.button`
  border: 0;
  background: transparent;
  box-sizing: border-box;
  width: 0;
  height: 7.4rem;
  margin-left: ${(props) => !props.isPaused && '15px'};
  border-color: transparent transparent transparent #fff;
  cursor: pointer;
  border-style: ${(props) => (props.isPaused ? 'double' : 'solid')};
  border-width: ${(props) =>
    props.isPaused ? '0 0 0 7.2rem' : '3.7rem 0 3.7rem 6rem'};

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: ${(props) => !props.isPaused && '6px'};
    height: 4rem;
    border-width: ${(props) =>
      props.isPaused ? '0 0 0 4rem' : '1.9rem 0 1.9rem 3.5rem'};
  }
`
