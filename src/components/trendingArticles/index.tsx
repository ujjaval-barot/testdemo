import Carousel from 'components/common/carousel/carousel';
import React from 'react';
import {TrendingCardsProps} from 'src/interfaces';
import {TrendingCard} from '../trendingCard/index';
import {TrendingCardContainer} from './trending-articles.styles';

export const TrendingArticles: React.FC<TrendingCardsProps> = ({articlesCollection}) => {
  const trendingCards = articlesCollection?.items.map((card, index) => <TrendingCard {...card} key={index} />);

  return (
    <TrendingCardContainer>
      <Carousel mobileOnly={false}>{trendingCards}</Carousel>
    </TrendingCardContainer>
  );
};
