import styled from 'styled-components'

export const QuestionsItem = styled.li`
  background: #f1f1f1;
  border-radius: 0.8rem;
  padding: 1.6rem;
  position: relative;
  overflow: hidden;
  color: #666666;
`
export const QuestionTitle = styled.h4`
  margin-right: 1.5rem;
`
export const QuestionBody = styled.div`
  transition: ${({ open }) =>
    open ? '0.5s cubic-bezier(0, 1, 0, 1)' : '0.5s ease-in-out'};
  transition: ;
  margin-top: ${({ open }) => (open ? '0' : '2rem')};
  word-break: break-all;

  max-height: ${({ open }) => (open ? '0' : '1000px')};
  overflow: hidden;
`
export const QuestionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`
export const QuestionButton = styled.a`
  position: relative;
  flex-shrink: 0;
  display: inline-block;
  width: 14px;
  height: 14px;
  overflow: hidden;
  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: -1px;
    background: #000;
    border-radius: 5px;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`
