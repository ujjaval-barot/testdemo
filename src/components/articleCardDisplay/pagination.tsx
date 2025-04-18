import React from 'react';
import {
  DisabledPageIconButton,
  PageButton,
  PageIconButton,
  PaginationContainer,
} from 'components/articleCardDisplay/articleCardDisplay.styles';
import {ChevronLeft, ChevronRight} from '../../assets/dynamicIcon';
import {useWindowSize} from 'hooks/useWindowSize';

interface PaginationProps {
  total: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({total, currentPage, setCurrentPage, itemsPerPage}) => {
  const {isMobile} = useWindowSize();

  const totalPages = Math.ceil(total / itemsPerPage);
  const maxPagesToShow = isMobile ? 2 : 5;

  const startPage = Math.max(0, Math.min(currentPage - Math.floor(maxPagesToShow / 2), totalPages - maxPagesToShow));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow);

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (totalPages <= 1) {
    return null;
  }

  const renderPageButtons = () => {
    const pageButtons = [];

    if (startPage > 0) {
      pageButtons.push(
        <PageButton key={0} onClick={() => setCurrentPage(0)} className={currentPage === 0 ? 'active' : ''}>
          1
        </PageButton>
      );
      if (startPage > 1) {
        pageButtons.push(<DisabledPageIconButton key={'startEllipsis'}>...</DisabledPageIconButton>);
      }
    }

    for (let i = startPage; i < endPage; i++) {
      pageButtons.push(
        <PageButton key={i} onClick={() => setCurrentPage(i)} className={currentPage === i ? 'active' : ''}>
          {i + 1}
        </PageButton>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageButtons.push(<DisabledPageIconButton key={'endEllipsis'}>...</DisabledPageIconButton>);
      }
      pageButtons.push(
        <PageButton
          key={totalPages - 1}
          onClick={() => setCurrentPage(totalPages - 1)}
          className={currentPage === totalPages - 1 ? 'active' : ''}
        >
          {totalPages}
        </PageButton>
      );
    }

    return pageButtons;
  };

  return (
    <PaginationContainer>
      <PageIconButton onClick={handlePrevious} className={currentPage === 0 ? 'disabled' : ''}>
        <ChevronLeft />
      </PageIconButton>

      {renderPageButtons()}

      <PageIconButton onClick={handleNext} className={currentPage === totalPages - 1 ? 'disabled' : ''}>
        <ChevronRight />
      </PageIconButton>
    </PaginationContainer>
  );
};

export default Pagination;
