import styled from 'styled-components'

export const TryErzyWrapper = styled.section`
  display: flex;
  background: ${(props) => props.theme.colors.gradient3};
  margin-bottom: 10rem;
  max-height: 90rem;
  overflow: hidden;
  border-radius: 0 10rem 10rem 0;
  @media ${(props) => props.theme.breakpoints.xl} {
    border-radius: 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 5rem 1rem;
    background: ${(props) => props.theme.colors.gradient1};
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const TryErzyImage = styled.div`
  min-height: 100%;
  object-fit: cover;
  line-height: 0;

  @media ${(props) => props.theme.breakpoints.md} {
    border-radius: 2rem;
    overflow: hidden;
    margin-bottom: 4rem;
    max-height: 432px;
    max-width: 70%;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 349px;
  }
`
export const TryErzyInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 2rem 10%;
  * {
    color: #fff;
  }
  > * {
    &:not(&:last-child) {
      margin-bottom: 2.3rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
    width: 60%;
    text-align: center;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`
export const TryErzyButton = styled.button`
  cursor: pointer;
  margin-top: 5rem;
  align-self: flex-start;
  border: none;
  outline: none;
  background: #fff;
  color: ${(props) => props.theme.colors.primary1};
  font-weight: 700;
  border-radius: 0.8rem;
  padding: 1.2rem 2.2rem;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.12);
  transition: 0.3s ease opacity;
  @media ${(props) => props.theme.breakpoints.md} {
    align-self: center;
  }

  &:hover {
    opacity: 0.8;
  }
`
