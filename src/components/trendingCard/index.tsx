import React from 'react';
import Link from 'next/link';

import {CardImageContainer, CardImageWrap, TagContainer, TitleContainer, DateContainer} from './trendingCard.styles';
import {ArticleProps} from 'src/interfaces';
import Image from 'next/image';
import {TagArray} from 'components/common/tag-array';

export const TrendingCard: React.FC<ArticleProps> = props => {
  return (
    <Link href={`/articles/${props.seo.pageSlug}`}>
      <a>
        <CardImageContainer>
          {props.featuredImage && (
            <CardImageWrap>
              <Image
                src={props.featuredImage.url}
                alt={props.featuredImage.description}
                layout="fill"
                objectFit="cover"
              />
            </CardImageWrap>
          )}
          {props.contentfulMetadata.tags && (
            <TagContainer>
              <TagArray compact={true} tags={props.contentfulMetadata.tags} />
            </TagContainer>
          )}
          <TitleContainer>{props.title}</TitleContainer>
          <DateContainer date={props.publishedAt ?? props.sys.firstPublishedAt} />
        </CardImageContainer>
      </a>
    </Link>
  );
};
