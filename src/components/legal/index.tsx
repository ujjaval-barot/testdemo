import React from 'react';

import {LegalWrapper, LegalContainer, LegalQuestion, LegalAnswer} from './legal.styles';

interface LegalInterface {
  items?: LegalProps[];
}

interface LegalProps {
  question: string;
  answer: string;
}

export const LegalCards: React.FC<LegalInterface> = (props): JSX.Element => {
  return (
    <LegalWrapper>
      {props.items?.map((legal, index) => (
        <LegalContainer key={index}>
          <LegalQuestion>{legal.question}</LegalQuestion>
          <LegalAnswer>{legal.answer}</LegalAnswer>
        </LegalContainer>
      ))}
    </LegalWrapper>
  );
};

export default LegalCards;
