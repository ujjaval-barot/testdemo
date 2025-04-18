import React from 'react';
import {useRouter} from 'next/router';
import {useState} from 'react';

import {
  BorderBlock,
  CareerBlock,
  GroupBlock,
  JobTitle,
  InfoBar,
  SummaryDescription,
  IconContainer,
  InfoBarText,
  ContactFormCarrer,
  Container,
} from './careerCard.styles';

import Money from 'src/components/icons/money';
import Location from 'src/components/icons/location';
import Suitcase from 'src/components/icons/suitcase';
import {Input} from 'src/components/input/';
import {Select} from 'src/components/select/';
import {TextArea} from 'src/components/textArea/';
import {UploadButton} from 'src/components/uploadButton/';
import {PrimaryButtonDark} from 'src/components/buttons/primaryDark';

import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {renderOptions} from 'utils/documentToReactComponents';
import {Document} from '@contentful/rich-text-types';

import {ContentfulRichTextJSON} from 'src/interfaces/';

import Accordion from 'src/components/common/accordion/accordion';

interface AccordionInterface {
  group?: string;
  jobTitle?: string;
  time?: string;
  location?: string;
  salary?: string;
  content: {
    json: ContentfulRichTextJSON;
  };
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  val: number;
  current: number;
}

export const CareerCard: React.FC<AccordionInterface> = (props): JSX.Element => {
  const router = useRouter();
  const [disable, setDisable] = useState(false);
  const [info, setInfo] = useState({
    name: '',
    email: '',
    option: '',
    description: '',
    file: '',
    jobTitle: props.jobTitle,
  });

  const validateInfo = async (e: React.FormEvent) => {
    e.preventDefault();
    setDisable(true);
    const response = await fetch('api/career/', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(info),
    });

    const responseJson = await response.json();
    if (responseJson.status === 200) {
      router.push('/confirmation');
    } else {
      router.push('/error');
    }
  };

  return (
    <BorderBlock>
      <CareerBlock>
        <GroupBlock>{props.group}</GroupBlock>
        <JobTitle mobile={false}>{props.jobTitle}</JobTitle>
        <Accordion
          useButton={true}
          active={props.active}
          setActive={props.setActive}
          val={props.val}
          current={props.current}
        >
          <InfoBar>
            <Container>
              <IconContainer>
                <Suitcase />
              </IconContainer>
              <InfoBarText>{props.time}</InfoBarText>
            </Container>
            <Container>
              <IconContainer>
                <Location />
              </IconContainer>
              <InfoBarText>Location: {props.location}</InfoBarText>
            </Container>
            <Container>
              {props.salary && (
                <IconContainer>
                  <Money />
                </IconContainer>
              )}
              <InfoBarText>{props.salary}</InfoBarText>
            </Container>
          </InfoBar>
          <JobTitle mobile={true}>{props.jobTitle}</JobTitle>
          <SummaryDescription>
            {documentToReactComponents(props.content.json as unknown as Document, renderOptions())}
          </SummaryDescription>
          <ContactFormCarrer>
            <form
              onInvalid={e => {
                e.preventDefault();
              }}
              onSubmit={validateInfo}
            >
              <Input
                value={info.name}
                setValue={setInfo}
                id="Full-Name"
                name="Full Name*"
                required={true}
                type="text"
                field="name"
                object={info}
                invalidMessage="Place your full name"
              />
              <Input
                value={info.email}
                setValue={setInfo}
                id="Email"
                name="Email*"
                required={true}
                type="email"
                field="email"
                object={info}
                invalidMessage="Place a valid email"
              />
              <Select
                value={info.option}
                setValue={setInfo}
                id={`Hear-About-Us-Career-${props.val}`}
                name="Where did you hear about us?*"
                options={['Linkedin', 'Indeed', 'Facebook', 'Other']}
                required={true}
                field="option"
                object={info}
                invalidMessage="Please select an option from the list"
              />
              <TextArea
                value={info.description}
                setValue={setInfo}
                id="Career-Description"
                name="Description*"
                required={true}
                rows={6}
                field="description"
                object={info}
                invalidMessage="Please fill the description"
              />
              <UploadButton
                setValue={setInfo}
                object={info}
                field="file"
                name="Name-File"
                id={`upload-button-${props.val}`}
                required={true}
                invalidMessage="Please attach a Word or PDF file"
              />
              <PrimaryButtonDark disabled={disable} type="submit">
                Submit
              </PrimaryButtonDark>
            </form>
          </ContactFormCarrer>
        </Accordion>
      </CareerBlock>
    </BorderBlock>
  );
};

export default CareerCard;
