import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  color: #f8fafc;
  border-radius: 10rem 0;
  overflow: hidden;
  @media ${(props) => props.theme.breakpoints.xl} {
    border-radius: 0;
  }
`

export const FooterMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #1c212e;
  padding: 6.4rem;
  min-height: 35.4rem;
  > * {
    &:not(&:last-child) {
      margin-right: 2rem;
    }
    &:last-child {
      margin-left: auto;
    }
    &:first-child {
      margin-right: 6rem !important;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    padding: 6.4rem 1rem;
    > * {
      &:not(&:last-child) {
        margin-right: 0;
        margin-bottom: 2rem;
      }
      &:last-child {
        margin-left: 0;
      }
      &:first-child {
        margin-bottom: 6rem !important;
      }
    }
  }
`
export const FooterCopyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3.2rem;
  background: #131825;
  min-height: 7rem;

  > * {
    &:not(&:last-child) {
      margin-right: 2rem;
    }
  }
  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    align-items: flex-start;

    > * {
      &:not(&:last-child) {
        margin-right: 0;
        margin-bottom: 2rem;
      }
    }
  }
`
export const FooterGroup = styled.div`
  max-width: 30%;
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 100%;
  }
`
export const FooterTitle = styled.h2`
  display: inline-block;
  margin-bottom: 1rem;
  font-weight: 600;
  font-size: 2.6rem;
`
export const FooterCategoryTitle = styled.h4`
  margin-bottom: 0.8rem;
  font-weight: 800;
  font-size: 1.8rem;
`
export const FooterSubtitle = styled.p``
export const FooterList = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    margin-bottom: 0.8rem;
  }
`
export const FooterLink = styled.a`
  color: #fff;
  font-size: 1.4rem;
  cursor: pointer;
  transition: 0.3s ease opacity;
  &:hover {
    opacity: 0.8;
  }
`
export const FooterIconsList = styled.div`
  display: flex;
  align-items: center;
  > * {
    margin-right: 0.8rem;
  }
`
export const FooterIcon = styled.a`
  cursor: pointer;
  transition: 0.3s ease all;

  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`
