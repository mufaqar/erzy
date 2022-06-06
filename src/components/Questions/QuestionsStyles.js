import styled from 'styled-components'

export const QuestionsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;
  padding: 0 10rem;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0 5rem;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 0 1rem;
  }
`
export const QuestionsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  text-align: center;
  > * {
    &:not(&:last-child) {
      margin-bottom: 2.5rem;
    }
  }
`
export const QuestionsListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.6rem;
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`

export const QuestionsList = styled.ul`
  display: flex;
  flex-direction: column;
  > * {
    &:not(&:last-child) {
      margin-bottom: 1.6rem;
    }
  }
`
