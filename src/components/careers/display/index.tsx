import React from 'react';
import {useState} from 'react';

import CareerCard from 'components/careers/card';
import {ContentfulRichTextJSON} from 'src/interfaces/';

import {CareersWrapper} from './display.styles';

interface AccordionDisplay {
  items?: AccordionInterface[];
}

interface AccordionInterface {
  jobDepartment?: string;
  jobTitle?: string;
  time?: string;
  location?: string;
  salary?: string;
  content: {
    json: ContentfulRichTextJSON;
  };
}

export const CareerCards: React.FC<AccordionDisplay> = (props): JSX.Element => {
  const [active, setActive] = useState(-1);
  return (
    <CareersWrapper>
      {props.items?.map((accordion, index) => (
        <CareerCard
          group={accordion.jobDepartment}
          jobTitle={accordion.jobTitle}
          time={accordion.time}
          location={accordion.location}
          salary={accordion.salary}
          content={accordion.content}
          key={index}
          val={index}
          active={active === index}
          setActive={setActive}
          current={active}
        />
      ))}
    </CareersWrapper>
  );
};

export default CareerCards;
