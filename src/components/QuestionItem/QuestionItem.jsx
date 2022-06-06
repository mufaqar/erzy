import {
  QuestionBody,
  QuestionsItem,
  QuestionTitle,
  QuestionHeader,
  QuestionButton,
} from './QuestionItemStyles'

import { useState } from 'react'

export const QuestionItem = ({ data }) => {
  const [open, setOpen] = useState(false)
  return (
    <QuestionsItem>
      <QuestionHeader onClick={() => setOpen(!open)}>
        <QuestionTitle>{data.title}</QuestionTitle>
        <QuestionButton></QuestionButton>
      </QuestionHeader>

      <QuestionBody open={open}>{data.body}</QuestionBody>
    </QuestionsItem>
  )
}
