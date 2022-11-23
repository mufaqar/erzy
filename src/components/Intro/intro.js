import React from 'react';
import Image from 'next/image';
import {
  IntroSection,
  TagWrapper,
  VideoSection,
  IntroContainer,
  FAQSection,
  BioFooter,
} from './introStyle';

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
import { useRouter } from 'next/router';
import { enUS, enFR } from '../../../public/translation';

const Tag = ({ title, icon }) => {
  return (
    <div className="tag_wrapper">
      <i>{icon}</i>
      <p>{title}</p>
    </div>
  );
};

export default function Intro({ profileData }) {
  console.log(profileData);
  const vidRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en-US' ? enUS : enFR;
  const questions = t.faq;
  const middleIndex = Math.ceil(questions.length / 2);
  const { status } = profileData;

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
      <h1>{profileData.title}</h1>
      <p className="username">@{profileData.username}</p>
      <TagWrapper>
        <Tag icon={<FiUsers />} title={status.sub} />
        <Tag icon={<FiStar />} title={status.star} />
        <Tag icon={<FiLock />} title={status.visibility} />
      </TagWrapper>

      <button className="_button">Начать Взаимный Пиар</button>
      <div className="div">
        <Image
          src={profileData.poster.poster.src}
          alt=""
          width={286}
          height={220}
        />
      </div>
      <p className="detail">{profileData.content}</p>

      <VideoSection>
        <IntroContainer>
          <h2 className="heading">{t.video_section_title}</h2>
          <p className="_text">{t.video_section_desc}</p>
          <div className="video-responsive">
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/${t.video_url}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </IntroContainer>
      </VideoSection>

      <FAQSection>
        <h2 className="heading">{t.faq_title}</h2>
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
