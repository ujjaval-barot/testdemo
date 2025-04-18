import Carousel from 'components/common/carousel/carousel';
import React from 'react';
import {CardsContainerProps, CardProps} from 'src/interfaces';
import _documentToReactComponents from 'utils/documentToReactComponents';

import {CardWrapper, CardTitle, CardCategory, CardSynopsis, CardBackgroundWrap} from './card.styles';

export const Card: React.FC<CardProps> = ({title, subtitle, description}) => {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardCategory>{subtitle}</CardCategory>
      <CardSynopsis>{_documentToReactComponents(description)}</CardSynopsis>
    </CardWrapper>
  );
};

export const CardsContainer: React.FC<CardsContainerProps> = ({cardsCollection}) => {
  const {items} = cardsCollection;

  if (!Boolean(items.length)) return null;

  const cardsMap = items.map((card, index) => (
    <CardBackgroundWrap key={index}>
      <Card title={card.title} subtitle={card.subtitle} description={card.description} key={index} />
    </CardBackgroundWrap>
  ));

  return (
    <React.Fragment>
      <Carousel>{cardsMap}</Carousel>
    </React.Fragment>
  );
};

export default CardsContainer;
