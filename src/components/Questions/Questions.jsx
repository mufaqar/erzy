import {
  QuestionsWrapper,
  QuestionsHeader,
  QuestionsList,
  QuestionsListWrapper,
} from './QuestionsStyles'
import { Title, SubTitle } from '../../styles/GlobalComponents'
import { QuestionItem } from '../QuestionItem/QuestionItem'
import { questions } from '../../constants/Questions'
const middleIndex = Math.ceil(questions.length / 2)
export const Questions = () => {
  console.log(middleIndex)
  return (
    <QuestionsWrapper id="questions">
      <QuestionsHeader>
        <Title>Questions Looks Here</Title>
        <SubTitle>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the{' '}
        </SubTitle>
      </QuestionsHeader>
      <QuestionsListWrapper>
        <QuestionsList>
          {questions
            .slice()
            .splice(0, middleIndex)
            .map((question) => {
              return <QuestionItem key={question.title} data={question} />
            })}
        </QuestionsList>
        <QuestionsList>
          {questions
            .slice()
            .splice(-middleIndex)
            .map((question) => {
              return <QuestionItem key={question.title} data={question} />
            })}
        </QuestionsList>
      </QuestionsListWrapper>
    </QuestionsWrapper>
  )
}
