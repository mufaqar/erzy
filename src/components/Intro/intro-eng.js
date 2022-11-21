import React from 'react';
import {
  IntroSection,
  TagWrapper,
  VideoSection,
  IntroContainer,
  FAQSection,
  BioFooter,
} from '../Intro/introStyle';

import {
  HowItWorksVideo,
  PlayPauseIcon,
  PlayPauseWrapper,
} from '../HowItWorks/HowItWorksStyles';

import {
  QuestionsList,
  QuestionsListWrapper,
} from '../Questions/QuestionsStyles';

import { QuestionItem } from '../QuestionItem/QuestionItem';
// import { questions } from "../../constants/Questions";
import Bounce from 'react-reveal/Bounce';
import { useRef, useState } from 'react';
import { FiUsers, FiStar, FiLock } from 'react-icons/fi';

// data
export const questions = [
  {
    title: 'How many channels can participate in the cross-promotion?   01 ',
    body: 'Erzy allows 1:1 cross-promotion therefore only two channels can participate in one cross-promotion. We found 1-to-1 cross-promotions are more effective because they are easier to track, and they look more organic unlike Mega(when channel pile up and share dozens of links). If cross-promotion with a particular channel was successful you can schedule more cross-promotions with this channel in the coming months.     ',
  },
  {
    title:
      'Can I conduct cross-promotion of Telegram group chats or private channels?    ',
    body: 'Erzy supports private channels and Telegram group chats.    ',
  },
  {
    title: 'Do I need to pay to do cross-promotion using Erzy?    ',
    body: 'If you ask for cross-promotion similar or smaller channels it’s completely free. To start free cross-promotion you can choose any of the channels given in the “Suggested List” or wait for requests from other admins.  However, if you want to grow your channel quickly by participating in cross-promotion with langer channels open “Paid cross-promotion”.    ',
  },
  {
    title: 'How do you calculate paid cross-promotion prices?    ',
    body: "Paid cross-promotion prices are calculated based on two variables: price per 1 subscriber set by admin and the difference between average subscribers shared. Let's look at the example, Channel-A Average Subscriber Shared=10; Channel-B Average Subscriber Shared=100; Channel-B price per 1 Sub=$1. So to do paid cross-promotion Channel-A has to pay Channel-B:  (100-10)*$1=$90.     ",
  },
  {
    title: 'What do I need to do to start earning from paid cross-promotions?',
    body: 'You have to complete at least 1 cross-promotion and set a price for 1 subscriber from your channel. If you have not completed any cross promotions Erzy calculates your channel Average Subscriber Shared as zero(0). The higher your average subscribers shared the better.',
  },
  {
    title:
      'What happens if I delete the bot from my channel during the cross-promotion?',
    body: 'System gives you a warning and if you do it again your channel will be blocked permanently.',
  },
  {
    title: 'Will your bot post things on my channel by itself?',
    body: 'No! Erzy bot only posts cross-promotion posts from channels that you have approved. Nothing will be posted without your approval.',
  },
  {
    title: 'Can I schedule several cross-promotions?',
    body: 'Yes, you can schedule as many cross-promotions as you want. In fact this is one of the advantages of using Erzy - you can save time on channel promotion. For example, in one day you can schedule 8 cross-promotions for the coming month(2 per week), and the rest of the month you can spend on your content and monitor the results.',
  },
  {
    title:
      'Is there a way for me to monetize my telegram channel using Erzy?    ',
    body: 'Yes. There are two ways you can monetize your channel: by doing paid cross-promotion and by inviting other channels.     ',
  },
];

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
          <h2 className="heading">How does Erzy work?</h2>
          <p className="_text">
            You can install Erzy with a simple 3-step process that hardly takes
            2 minutes: login to the platform; add our bot to your channel and
            create a promo post. Once you have installed Erzy you can start
            scheduling cross-promotions. To see the whole process check out the
            video tutorial below:
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
        <h2 className="heading">FAQ</h2>
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
