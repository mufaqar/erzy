import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
export const FeaturesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7.6rem 10rem;
  margin-bottom: 10rem;
  border-radius: 10rem 0;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.9)
    ),
    #07a3b2;

  @media ${(props) => props.theme.breakpoints.xl} {
    border-radius: 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 8.9rem 1.2rem;
  }
`

export const FeaturesHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  text-align: center;
  margin-bottom: 4.8rem;
  > * {
    &:not(&:last-child) {
      margin-bottom: 2.8rem;
    }
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
  }
`
export const FeaturesTabs = styled(Tabs)``
export const FeaturesTab = styled(Tab)`
  color: #cccccc;
  text-align: center;
  font-weight: 700;
  font-family: 'Raleway', sans-serif;
  line-height: 1;
  cursor: pointer;
  transition: 0.3s ease color;
  position: relative;
  &:hover {
    color: ${(props) => props.theme.colors.primary1};
  }
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: -50%;
    left: 0;
    width: 0%;
    height: 4px;
    transition: 0.3s ease width;

    background: ${(props) => props.theme.colors.secondary1};
  }

  &.react-tabs__tab--selected {
    color: ${(props) => props.theme.colors.secondary1};
    &:before {
      width: 100%;
    }
  }
`
export const FeaturesTabList = styled(TabList)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 9.4rem;
  > * {
    &:not(&:last-child) {
      margin-right: min(10vw, 7.5rem);
    }
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    > * {
      &:not(&:last-child) {
        margin-right: min(2vw, 7.5rem);
      }
    }
  }
`
export const FeaturesTabPanel = styled(TabPanel)`
  > * {
    padding: 0 5rem;
    border-radius: 4rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    > * {
      padding: 0rem 0.5rem;
    }
  }
`
