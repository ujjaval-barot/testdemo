import React from 'react';
import {ArticleProps} from 'src/interfaces';

import {
  RelatedArticleContainer,
  InfoContainer,
  TitleButtonContainer,
  TitleStyle,
  DateStyle,
  DateContainer,
  ReadMoreLink,
} from './relatedArticles.styles';

import {PrimaryButtonLight} from 'src/components/buttons/primaryLight';
import {TagArray} from 'components/common/tag-array';
import FormattedDate from 'components/common/formatted-date';
import Link from 'next/link';
import slugify from 'utils/slugify';

interface Props {
  article: ArticleProps;
}

export const RelatedArticle: React.FC<Props> = ({article}) => {
  return (
    <RelatedArticleContainer>
      <InfoContainer>
        {article.contentfulMetadata.tags && <TagArray tags={article.contentfulMetadata.tags} />}
        <TitleButtonContainer>
          <TitleStyle>{article.title}</TitleStyle>
          <Link href={`/articles/${slugify(article.title)}`}>
            <a>
              <ReadMoreLink>
                <PrimaryButtonLight>Read Now</PrimaryButtonLight>
              </ReadMoreLink>
            </a>
          </Link>
        </TitleButtonContainer>
        <DateContainer>
          <DateStyle>
            <FormattedDate date={article.publishedAt ?? article.sys.firstPublishedAt} />
          </DateStyle>
        </DateContainer>
      </InfoContainer>
    </RelatedArticleContainer>
  );
};
