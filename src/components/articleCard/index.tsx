import React from 'react';

import {
  ArticleCardContainer,
  ImageContainer,
  TextContainer,
  InfoContainer,
  TitleArticle,
  DateArticle,
  ButtonArticleContainer,
} from './articleCard.styles';

import {PrimaryButtonLight} from 'src/components/buttons/primaryLight/index';
import {ArticleProps} from 'interfaces';
import {TagArray} from 'components/common/tag-array';
import FormattedDate from 'components/common/formatted-date';
import Image from 'next/image';
import Link from 'next/link';

type ArticleCardInterface = ArticleProps;

export const ArticleCard: React.FC<ArticleCardInterface> = props => {
  return (
    <ArticleCardContainer>
      {props.featuredImage && (
        <ImageContainer showImg={Boolean(props.featuredImage?.url)}>
          <Image src={props.featuredImage?.url} layout="fill" objectFit="cover" />
        </ImageContainer>
      )}
      <TextContainer>
        <InfoContainer>
          {props.contentfulMetadata.tags && <TagArray tags={props.contentfulMetadata.tags} />}
          <TitleArticle>{props.title}</TitleArticle>
          <DateArticle>
            <FormattedDate date={props.publishedAt ?? props.sys.firstPublishedAt} />
          </DateArticle>
          <ButtonArticleContainer>
            <Link href={`/articles/${props.seo?.pageSlug}`}>
              <PrimaryButtonLight>Read More</PrimaryButtonLight>
            </Link>
          </ButtonArticleContainer>
        </InfoContainer>
      </TextContainer>
    </ArticleCardContainer>
  );
};
