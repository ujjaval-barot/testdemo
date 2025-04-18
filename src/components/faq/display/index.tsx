import React from 'react';
import {useState} from 'react';

import {FAQWrapper} from './display.styles';

import FAQCard from 'components/faq/card';

import {ContentfulRichTextJSON} from 'src/interfaces/';

interface FaqProps {
  items?: FaqData[];
}

interface FaqData {
  question: string;
  answer: string;
  content: {
    json: ContentfulRichTextJSON;
  };
}

export const FaqCards: React.FC<FaqProps> = props => {
  const [active, setActive] = useState(-1);

  return (
    <FAQWrapper>
      {props.items?.map((accordion, index) => (
        <FAQCard
          key={index}
          question={accordion.question}
          answer={accordion.answer}
          content={accordion.content}
          val={index}
          active={active === index}
          setActive={setActive}
          current={active}
        />
      ))}
    </FAQWrapper>
  );
};

export default FaqCards;
