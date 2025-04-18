import React from 'react';
import Image from 'next/image';
import {ArticleProps} from 'src/interfaces';

import {
  HeroContainer,
  ImageContainer,
  GenericHeroWithImage,
  HeroTitle,
  DateHero,
  AuthorText,
  AuthorHeader,
} from './heroArticle.styles';
import _documentToReactComponents from 'utils/documentToReactComponents';
import FormattedDate from 'components/common/formatted-date';
import {TagArray} from 'components/common/tag-array';

export interface HeroProps {
  article: ArticleProps;
  ref?: React.MutableRefObject<HTMLDivElement>;
}

export const HeroArticle: React.FC<HeroProps> = ({article, ref}) => {
  const {title, contentfulMetadata, author, publishedAt, sys, featuredImage} = article;

  return (
    <HeroContainer ref={ref}>
      {featuredImage && (
        <ImageContainer>
          <Image src={featuredImage.url} layout="fill" objectFit="cover" />
        </ImageContainer>
      )}
      <GenericHeroWithImage>
        {contentfulMetadata.tags && <TagArray tags={contentfulMetadata.tags} />}
        <HeroTitle>{title}</HeroTitle>
        {author && (
          <React.Fragment>
            <AuthorHeader>Author:</AuthorHeader>
            <AuthorText>{_documentToReactComponents(author)}</AuthorText>
          </React.Fragment>
        )}
        <DateHero>
          <FormattedDate date={publishedAt ?? sys.firstPublishedAt} />
        </DateHero>
      </GenericHeroWithImage>
    </HeroContainer>
  );
};
