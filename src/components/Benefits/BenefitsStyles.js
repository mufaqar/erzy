import styled from 'styled-components'

export const BenefitsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  margin-bottom: 10rem;

  &:after {
    content: '';
    display: block;
    position: absolute;
    background: transparent;
    bottom: 5%;
    left: 10%;
    z-index: -1;
    width: 40.5rem;
    height: 15rem;
    background-image: radial-gradient(#e7f0fc 24%, transparent 24%);
    background-position: 0 0, 100px 100px;
    background-size: 20px 20px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
    margin-bottom: 15rem;
    height: auto;

    &:after {
      top: 10%;
      left: 50%;
      transform: translateX(-50%);

    }

    > * {
      &:not(&:last-child) {
        margin-bottom: 20rem;
      }

  }
  @media ${(props) => props.theme.breakpoints.sm} {

    &:after {
      top: 8%;
      left: 50%;
      transform: translateX(-50%);

    }
    > * {
      &:not(&:last-child) {
        margin-bottom: 7rem;
      }
  }
  }
`
export const TitleWrapper = styled.div`
  display: inline-block;
  &:after {
    content: '';
    display: block;
    position: absolute;
    background: #fff5db;
    border-top-left-radius: 10rem;
    top: -4rem;
    left: 7rem;
    z-index: -1;
    width: 17.8rem;
    height: 14.8rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    &:after {
      width: 16.8rem;
      height: 10.8rem;
      top: -4rem;
      left: 3rem;
    }
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    &:after {
      width: 18.8rem;
      left: 2vw;
      top: -2rem;
    }
  }
`
export const BenefitsHeader = styled.div`
  padding-left: 10rem;
  margin-right: -5vw;
  position: relative;
  z-index: 1;
  > * {
    &:not(&:last-child) {
      margin-bottom: 3.4rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    text-align: center;
    padding: 0 1.2rem;
    margin-right: 0;
  }
`
export const BenefitsItemImage = styled.div`
  width: 12.1rem;
  height: 12.1rem;
  margin-bottom: 2.1rem;
  border-radius: 2rem;
  > * {
    transform: translate(5px, -20px) scale(1.1) !important;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 9.8rem;
    height: 9.8rem;
    > * {
      transform: translate(5px, -10px) scale(1.2) !important;
    }
  }
`
export const BenefitsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 1px solid #f2f2f2;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.05);
  border-radius: 4rem;
  width: min(21.5vw, 308px);
  min-height: 383px;
  padding: 2rem 3.6rem;
  @media ${(props) => props.theme.breakpoints.md} {
    width: min(40.5vw, 308px);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 250px;
    min-height: 266px;
  }
`
export const BenefitsGroup = styled.div`
display flex;
flex-direction: column;
> * {
  &:not(&:last-child){
    margin-bottom: 3.2rem;
  }
}
`
export const BenefitsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3.4rem;
  padding: 5rem 10vw;
  padding-top: 10rem;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.9)
    ),
    #667eea;
  border-top-left-radius: 15rem;
  position: relative;
  ${BenefitsGroup}:nth-child(1) {
    margin-top: -16rem;
    margin-bottom: -16rem;
  }
  ${BenefitsGroup}:nth-child(2) {
    margin-top: -22rem;
    margin-bottom: -2rem;
  }
  ${BenefitsGroup}:nth-child(1) ${BenefitsItem}:nth-child(1) ${BenefitsItemImage} {
    background: #f1f7ff;
  }
  ${BenefitsGroup}:nth-child(1) ${BenefitsItem}:nth-child(2) ${BenefitsItemImage} {
    background: #fff7e3;
  }
  ${BenefitsGroup}:nth-child(2) ${BenefitsItem}:nth-child(1) ${BenefitsItemImage} {
    background: #fff2f8;
  }
  ${BenefitsGroup}:nth-child(2) ${BenefitsItem}:nth-child(2) ${BenefitsItemImage} {
    background: #deffee;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -6.5rem;
    right: 12rem;
    z-index: -1;
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    border: 8.8px solid #ff007a;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    align-items: center;

    &:after {
      right: 3rem;
    }

    ${BenefitsGroup}:nth-child(1) {
      margin-top: 0rem;
      margin-bottom: 0rem;
    }
    ${BenefitsGroup}:nth-child(2) {
      margin-top: 0rem;
      margin-bottom: -0rem;
    }
  }
`

export const BenefitsItemTitle = styled.h3`
  color: #000;
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 2.5rem;
`
export const BenefitsItemText = styled.p`
  font-size: 1.6rem;
  color: ##757575;
  text-align: center;
  margin-bottom: 2.5rem;
`
