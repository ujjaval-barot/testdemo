import React from 'react';
import Image from 'next/image';
import FormattedDate from 'components/common/formatted-date';
import {useState} from 'react';

import {
  ContainerPress,
  PressCard,
  PressImage,
  PressText,
  DatePress,
  TitlePress,
  SourcePress,
  ContainerButton,
  PressMediaLink,
} from './pressMedia.styles';
import {useWindowSize} from 'hooks/useWindowSize';
import {PrimaryButtonLight} from 'src/components/buttons/primaryLight';
import {CTA} from 'src/interfaces/';

interface PressMediaInterface {
  newsCardsCollection: PressItems;
}

interface PressItems {
  items: Array<PressCardInterface>;
}

interface PressImage {
  url: string;
}

interface PressCardInterface {
  image: PressImage;
  title: string;
  date: string;
  source: string;
  cta: CTA;
}

export const NewsDisplay: React.FC<PressMediaInterface> = (props): JSX.Element => {
  const {isMobile} = useWindowSize();
  const pressImageWidth = isMobile ? '109px' : '200px';
  const pressImageHeight = isMobile ? '65px' : '110px';
  const [pressCounter, setPressCounter] = useState(4);

  const increaseNews = () => {
    setPressCounter(pressCounter + 4);
  };

  return (
    <React.Fragment>
      <ContainerPress>
        {props.newsCardsCollection.items.slice(0, pressCounter).map((card, index) => (
          <React.Fragment key={index}>
            <PressCard>
              <PressMediaLink href={card.cta.link}>
                <PressImage>
                  <Image src={card.image.url} width={pressImageWidth} height={pressImageHeight} objectFit="contain" />
                </PressImage>
                <PressText>
                  <DatePress>
                    <FormattedDate date={card.date} />
                  </DatePress>
                  <TitlePress>{card.title}</TitlePress>
                  <SourcePress>{card.source}</SourcePress>
                </PressText>
              </PressMediaLink>
            </PressCard>
          </React.Fragment>
        ))}
      </ContainerPress>
      <ContainerButton showButton={pressCounter >= props.newsCardsCollection.items.length - 1} onClick={increaseNews}>
        <PrimaryButtonLight>More News</PrimaryButtonLight>
      </ContainerButton>
    </React.Fragment>
  );
};

export default NewsDisplay;
