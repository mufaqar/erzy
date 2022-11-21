import React from "react";
import {
  IntroSection,
  TagWrapper,
  VideoSection,
  IntroContainer,
  FAQSection,
  BioFooter,
} from "./introStyle";

import {
  HowItWorksVideo,
  PlayPauseIcon,
  PlayPauseWrapper,
} from "../HowItWorks/HowItWorksStyles";

import {
  QuestionsList,
  QuestionsListWrapper,
} from "../Questions/QuestionsStyles";

import { QuestionItem } from "../QuestionItem/QuestionItem";
// import { questions } from "../../constants/Questions";
import Bounce from "react-reveal/Bounce";
import { useRef, useState } from "react";
import { FiUsers, FiStar, FiLock } from "react-icons/fi";

// data 
export const questions = [
  {
    title: 'Сколько каналов могут участвовать одновременно во взаимном пиаре(ВП)?    ',
    body: 'Erzy позволяет проводить взаимный пиар(кросс-промоушн) 1:1, поэтому в одном взаимный пиаре могут участвовать только два канала. Мы обнаружили, что взаимный пиар 1:1 более эффективен, потому что его легче отследить, и он выглядит более органично, в отличие от Меги (когда каналы собираются в одну кучу и делятся десятками ссылок).    ',
  },
  {
    title: 'Могу ли я проводить взаимный пиар(ВП) в групповых чатах Telegram или частных каналах?    ',
    body: 'Erzy поддерживает приватные каналы и групповые чаты.    '
  },
  {
    title: 'Нужно ли мне платить вам за взаимный пиар?    ',
    body: 'Вы можете бесплатно проводить взаимный пиар с каналами схожими или меньше вашего канала. Чтобы начать бесплатный взаимный пиар, вы можете выбрать любой из каналов, указанных в «Suggested List», или дождаться запросов от других администраторов. Однако, если вы хотите быстро развить свой канал, проводя взаимный пиар с более крупными каналами вы можете воспользоваться функцией платного взаимного пиара - раздел «Paid cross-promotion».    '
  },
  {
    title: 'Как вы рассчитываете цены для платного взаимного пиара(ВП)?    ',
    body: 'Цены платного взаимного пиара(ВП) рассчитываются на основе двух переменных: цены за 1 подписчика, установленной администратором, и разницы между средним кол-вом подписчиков каналы передают за ВП. Рассмотрим пример: Канала-А в среднем за ВП отдает 10 подписчиков; Канала-B в среднем за ВП отдает 100 подписчиков; цена за 1 подписчика канала B=$1. Таким образом, чтобыдля того чтобы провести платный взаимный пиар Канал-А должен заплатить Каналу-Б: (100-10)*$1=$90.'
  },
  {
    title: 'Что мне нужно сделать, чтобы начать зарабатывать на платных ВП?    ',
    body: 'Вы должны провести хотя бы 1 ВП и установить цену за 1 подписчика с вашего канала(на странице Channel Settings). Если вы еще не провели ни одного ВП, Erzy рассчитывает что ваш канал реднем за ВП отдает 0(ноль) подписчиков. Чем больше ваш канал делится пользователями во время взаимного пиара тем больше вы можете зарабатывать и тем меньше вам надо доплачивать во время платного ВП с большими каналами.'
  },
  {
    title: 'Что произойдет, если я удалю бота со своего канала во время взаимного пиара?    ',
    body: 'Система выдаст вам предупреждение, и если вы сделаете это снова, ваш канал будет забанен навсегда.'
  },
  {
    title: 'Будет ли ваш бот сам от себя публиковать что-то на моем канале?',
    body: "Нет! Бот Erzy публикует промо посты только с тех каналов, которые вы одобрили. Ничего не будет размещено без вашего одобрения. Могу ли я заранее запланировать несколько ВП? Да, вы можете запланировать столько взаимных пиаров, сколько захотите. На самом деле это одно из преимуществ использования Erzy, которое позволяет сэкономить много времени на продвижение вашего канала. Например, за один день вы можете запланировать 8 кросс-промо на предстоящий месяц (по 2 в неделю), а оставшуюся часть месяца посвятить своему контенту и следить за результатами, а наш сервис все сделает автоматически. "
  },
  {
    title: 'Есть ли способ монетизировать мой телеграм-канал с помощью Erzy?    ',
    body: 'Да. Есть два способа монетизации канала: платное кросс-промоушн и приглашение других каналов.     '
  },
]

const middleIndex = Math.ceil(questions.length / 2);


const Tag = ({ title, icon }) => {
  return (
    <div className="tag_wrapper">
      <i>{icon}</i>
      <p>{title}</p>
    </div>
  );
};

export default function Intro() {
  const vidRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const handlePlayPauseButton = () => {
    if (isPaused) {
      vidRef.current.pause();
      setIsVisible(true);
      setIsPaused(false);
    } else {
      vidRef.current.play();

      setIsPaused(true);
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    }
  };

  return (
    <IntroSection>
      <h1>Дагестанские авиалинии с Махачем</h1>
      <p className="username">@makhach_tyagach</p>
      <TagWrapper>
        <Tag icon={<FiUsers />} title="2130 Subs" />
        <Tag icon={<FiStar />} title="9.2" />
        <Tag icon={<FiLock />} title="Public" />
      </TagWrapper>

      <button className="_button">Начать Взаимный Пиар</button>
      <div className="div"></div>
      <p className="detail">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        faucibus mauris quis purus mattis malesuada. Sed a mollis quam. Nam quis
        eros euismod nulla accumsan tincidunt eu ut mi. Vivamus imperdiet arcu
        ac ullamcorper ornare. Nullam at ligula tincidunt, feugiat augue quis,
        sagittis nisi.
      </p>

      <VideoSection>
        <IntroContainer>
          <h2 className="heading">Как работает Erzy?</h2>
          <p className="_text">
            Вы можете установить Erzy с помощью простого трехэтапного процесса,
            который займет всего 2 минуты: войдите на платформу, добавьте нашего
            бота на свой канал и создайте промо-пост. После установки Erzy вы
            можете начать планировать взаимный пиар. Чтобы увидеть весь процесс,
            посмотрите видеоинструкцию ниже:
          </p>
          <HowItWorksVideo
            onClick={handlePlayPauseButton}
            onMouseEnter={() =>
              setTimeout(() => {
                setIsVisible(true);
              }, 2000)
            }
            onMouseLeave={() =>
              isPaused &&
              setTimeout(() => {
                setIsVisible(false);
              }, 2000)
            }
          >
            <video loop muted ref={vidRef}>
              <source src="/videos/video.mp4" type="video/mp4" />
              video html tag doesnt work
            </video>
            <PlayPauseWrapper isVisible={isVisible}>
              <PlayPauseIcon
                isPaused={isPaused}
                onClick={handlePlayPauseButton}
              />
            </PlayPauseWrapper>
          </HowItWorksVideo>
        </IntroContainer>
      </VideoSection>

      <FAQSection>
        <h2 className="heading">Часто Задаваемые Вопросы</h2>
        <IntroContainer>
          <QuestionsListWrapper>
            <QuestionsList>
              {questions
                .slice()
                .splice(0, middleIndex)
                .map((question) => {
                  return (
                    <Bounce right key={question.title}>
                      <QuestionItem data={question} />
                    </Bounce>
                  );
                })}
            </QuestionsList>
            <QuestionsList>
              {questions
                .slice()
                .splice(-middleIndex)
                .map((question) => {
                  return (
                    <Bounce left key={question.title}>
                      <QuestionItem data={question} />
                    </Bounce>
                  );
                })}
            </QuestionsList>
          </QuestionsListWrapper>
        </IntroContainer>
      </FAQSection>

      <BioFooter />
    </IntroSection>
  );
}
