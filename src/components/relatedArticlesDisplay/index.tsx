import React from 'react';
import {RelatedArticle} from 'src/components/relatedArticles';
import {ArticleProps} from 'src/interfaces';
import {RelatedArticlesGrid} from './relatedArticlesDisplay.styles';

interface RelatedArticlesDisplayProps {
  data: Array<ArticleProps>;
}

export const RelatedArticlesDisplay: React.FC<RelatedArticlesDisplayProps> = props => {
  return (
    <RelatedArticlesGrid>
      {props.data.map((article, index) => (
        <RelatedArticle article={article} key={index} />
      ))}
    </RelatedArticlesGrid>
  );
};
