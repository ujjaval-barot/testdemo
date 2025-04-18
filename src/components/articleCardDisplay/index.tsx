import React, {forwardRef} from 'react';
import {ArticleCard} from 'components';

import {ButtonArticleContainer, Container} from './articleCardDisplay.styles';
import {ArticleProps} from 'interfaces';
import SiteWrap from 'components/common/site-wrap';
import Pagination from 'components/articleCardDisplay/pagination';

interface ArticleCardDisplayProps {
  data?: ArticleProps[];
  total?: number;
  currentPage: number;
  loading: boolean;
  setCurrentPage(page: number): void;
}

export const ArticleCardDisplay = forwardRef<HTMLDivElement, ArticleCardDisplayProps>(
  ({data, total, currentPage = 1, setCurrentPage, loading = false}, ref) => {
    return (
      <Container ref={ref}>
        {!loading && !data?.length ? (
          <SiteWrap hasPadding={true} hideBorder={true}>
            <h4>No Results</h4>
          </SiteWrap>
        ) : (
          data?.map((article, index) => <ArticleCard {...article} key={index} />)
        )}
        <ButtonArticleContainer>
          <Pagination total={total ?? 0} currentPage={currentPage} setCurrentPage={setCurrentPage} itemsPerPage={4} />
        </ButtonArticleContainer>
      </Container>
    );
  }
);
