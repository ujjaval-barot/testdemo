import React from 'react';

import {QuestionBlock, QuestionTextStyle, ContainerAccordion, AnswerTextStyle} from './accordion.styles';

import Accordion from 'src/components/common/accordion/accordion';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {renderOptions} from 'utils/documentToReactComponents';
import {Document} from '@contentful/rich-text-types';
import {ContentfulRichTextJSON} from 'src/interfaces/';

interface AccordionInterface {
  question?: string;
  answer?: string;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  val: number;
  current: number;
  content?: {
    json: ContentfulRichTextJSON;
  };
}

export const FAQCard: React.FC<AccordionInterface> = (props): JSX.Element => {
  const validateActive = () => {
    if (props.current === props.val) {
      props.setActive(-1);
    } else {
      props.setActive(props.val);
    }
  };

  return (
    <ContainerAccordion>
      <QuestionBlock>
        <QuestionTextStyle onClick={validateActive}>{props.question}</QuestionTextStyle>
      </QuestionBlock>
      <Accordion
        useButton={false}
        active={props.active}
        setActive={props.setActive}
        val={props.val}
        current={props.current}
      >
        <AnswerTextStyle>
          {documentToReactComponents(props.content?.json as unknown as Document, renderOptions())}
        </AnswerTextStyle>
      </Accordion>
    </ContainerAccordion>
  );
};

export default FAQCard;
