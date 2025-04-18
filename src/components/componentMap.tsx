import React from 'react';
import ImagevideoCard from 'components/textImageCard/textImage';
import {FaqCards} from 'components/faq/display';
import {TitleButtonCard} from 'src/components/titleButtonCard/';
import {SectionTitle, Hero, Article, RelatedArticle} from 'components';
import {LogosGrid} from './logoGrid';
import CardsContainer from './card';
import {TrendingArticles} from './trendingArticles';
import {CareerCards} from 'src/components/careers/display';
import {HorizontalRule} from './common/horizontal-rule.styles';
import {TwitterCarousel} from './twitterCarousel';
import {LegalCards} from 'src/components/legal/';
import {NewsDisplay} from 'src/components/pressMedia/';

// prettier-ignore
type Components =
  | typeof CareerCards
  | typeof Article
  | typeof CardsContainer
  | typeof FaqCards
  | typeof Hero
  | typeof HorizontalRule
  | typeof ImagevideoCard
  | typeof LogosGrid
  | typeof RelatedArticle
  | typeof SectionTitle
  | typeof TrendingArticles
  | typeof TrendingArticles
  | typeof TitleButtonCard
  | typeof TwitterCarousel
  | typeof LegalCards
  | typeof NewsDisplay;
//| typeof some-other-component: add as needed

export const componentMap: {[key: string]: Components} = {
  Article,
  CardsContainer,
  FaqCards,
  Hero,
  HorizontalRule,
  ImagevideoCard,
  LogosGrid,
  RelatedArticle,
  SectionTitle,
  TrendingArticles,
  CareerCards,
  TitleButtonCard,
  TwitterCarousel,
  LegalCards,
  NewsDisplay,
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getComponentByTypename = ({__typename, ...props}: any): JSX.Element => {
  const Component = componentMap[__typename];

  if (!Component) {
    console.error(`Component ${__typename} could not be mapped, check to make sure it was added to componentMap`);

    return <React.Fragment />;
  }

  return <Component {...props} />;
};

export default getComponentByTypename;
