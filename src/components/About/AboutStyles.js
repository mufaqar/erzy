import styled from 'styled-components'

export const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;
  padding: 0 10rem;
  position: relative;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0 1rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 4rem;
  }
`
export const AboutHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  text-align: center;
  margin-bottom: 5rem;
  > * {
    &:not(&:last-child) {
      margin-bottom: 1rem;
    }
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 80%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
  }
`
export const AboutGrid = styled.div`
  min-width: 100%;
  height: 1278px;
  background: ${(props) => props.theme.colors.gradient2};
  border-radius: 10rem 0px;
  position: relative;

  &:after {
    content: '';
    display: block;
    position: absolute;
    background: transparent;
    top: 15%;
    left: 21%;
    z-index: -1;
    width: 40.5rem;
    height: 15rem;
    background-image: radial-gradient(#e7f0fc 24%, transparent 24%);
    background-position: 0 0, 100px 100px;
    background-size: 20px 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    &:after {
      display: none;
    }
  }
`

export const AboutGridItemInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -3rem;
`

export const AboutGridItem = styled.div`
  user-select: none;
  width: 25rem;
  height: 25rem;
  border-radius: 50%;
  background: #fff;
  position: absolute;

  &:nth-child(1) {
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    ${AboutGridItemInner} {
      margin-top: 0;
    }
  }
  &:nth-child(2) {
    top: 15%;
    left: 10%;
    transform: translateY(-15%) translateX(-10%);
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      #d9ecc7;
  }
  &:nth-child(3) {
    top: 85%;
    left: 10%;
    transform: translateY(-85%) translateX(-10%);
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.9),
        rgba(255, 255, 255, 0.9)
      ),
      #f03738;
  }
  &:nth-child(4) {
    top: 80%;
    left: 90%;
    transform: translateY(-80%) translateX(-90%);
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.9),
        rgba(255, 255, 255, 0.9)
      ),
      #f3bb1c;
  }
  &:nth-child(5) {
    top: 10%;
    left: 90%;
    transform: translateY(-10%) translateX(-90%);
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.9),
        rgba(255, 255, 255, 0.9)
      ),
      #07a3b2;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 20rem;
    height: 20rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 16rem;
    height: 16rem;
    &:nth-child(1) {
      left: 110%;
      transform: translateX(-110%) translateY(-50%);
    }
    &:nth-child(2) {
      top: 30%;
      left: 2%;
      transform: translateY(-30%) translateX(-2%);
    }
    &:nth-child(3) {
      top: 69%;
      left: 2%;
      transform: translateY(-69%) translateX(-2%);
    }

    &:nth-child(4) {
      top: 94%;
      left: 60%;
      transform: translateY(-94%) translateX(-60%);
    }
    &:nth-child(5) {
      top: 5%;
      left: 90%;
      transform: translateY(-5%) translateX(-90%);
    }
  }
`

export const AboutTitle = styled.div`
  background: #fff5db;
  border-radius: 0 15rem;
  padding: 2rem;
`

export const AboutGritItemTitle = styled.h3`
  margin-top: 4rem;
  text-align: center;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 1;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2rem;
  }
`
export const AboutGridItemCount = styled.h3`
  font-weight: 800;
  font-size: 6.4rem;
  line-height: 1;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 4.8rem;
  }
`
export const AboutGridItemTrace = styled.hr`
  position: absolute;
  top: 0%;
  right: 55%;
  transform: translate(-0%, -0%) rotate(40deg);
  border: none;
  border-top: 4px dashed #fff;
  background-color: transparent;
  height: 4px;
  width: 220px;
  z-index: -1;
  @media ${(props) => props.theme.breakpoints.md} {
    transform: translate(-0%, -0%) rotate(60deg);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
  &:nth-child(2) {
    top: 7%;
    right: -85%;
    transform: translate(-7%, 85%) rotate(120deg);
    width: 300px;
    @media ${(props) => props.theme.breakpoints.md} {
      right: -65%;
      transform: translate(-7%, 65%) rotate(110deg);
    }
  }

  &:nth-child(3) {
    top: 99%;
    right: -58%;
    transform: translate(-99%, -58%) rotate(41eg);
    width: 260px;
  }
  &:nth-child(4) {
    top: 111%;
    right: -70%;
    transform: translate(-111%, 70%) rotate(-52deg);
    width: 280px;
    @media ${(props) => props.theme.breakpoints.md} {
      right: -120%;
      transform: translate(-111%, 100%) rotate(-69deg);
    }
  }
`
