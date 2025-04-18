import React from 'react';
import {Document} from '@contentful/rich-text-types';

import {
  ArticleBodyContainer,
  FooterContainer,
  FooterInfoContainer,
  FooterInfo,
  ArticleContainer,
} from './article.styles';

import {ArticleProps} from 'src/interfaces';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import _documentToReactComponents, {renderOptions} from 'utils/documentToReactComponents';

export const Article: React.FC<ArticleProps> = props => {
  return (
    <ArticleContainer>
      <ArticleBodyContainer>
        {documentToReactComponents(props.content.json as unknown as Document, renderOptions(props.content.links))}
      </ArticleBodyContainer>
      {props.footnote && (
        <FooterContainer>
          <FooterInfoContainer>
            <FooterInfo>{_documentToReactComponents(props.footnote.content)}</FooterInfo>
          </FooterInfoContainer>
        </FooterContainer>
      )}
    </ArticleContainer>
  );
};
