import React, {useEffect, useRef} from 'react';
import {useState} from 'react';

import {
  BarWrapper,
  InsideWrapper,
  Title,
  TagWrapper,
  InsideWrapperTag,
  FilterStyled,
  CustomInput,
  LabelContainer,
  TitleContainer,
  StyledTag,
  TitleContainerTag,
  ImageContainer,
  ClearButton,
  DownLogo,
  ButtonWrapper,
  Menu,
  OptionContainer,
  StyledChevron,
  FilterLabel,
  FilterButtonWrap,
} from './filter.styles';

import {CloseIcon} from 'src/components/images/closeIconImage';
import {ArticleTag} from 'interfaces';

interface Props {
  filters: ArticleTag[];
  currentFilters?: string[] | null;
  onFilterChange?(filter: string[]): void;
}

export const Filter: React.FC<Props> = ({filters, onFilterChange, currentFilters = []}): JSX.Element => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bodyClick = (e: Event) => {
      if (e.target !== dropdownWrapperRef.current && !dropdownWrapperRef.current?.contains(e.target as any))
        setShowDropdown(false);
    };
    document.body.addEventListener('click', bodyClick);

    return () => document.body.removeEventListener('click', bodyClick);
  }, []);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const changeCheckbox = (e: React.ChangeEvent<HTMLInputElement>, filter: string) => {
    const _currentFilters = Boolean(currentFilters?.length) ? [...currentFilters!] : [];

    if (e.target.checked) {
      _currentFilters.push(filter);
    } else {
      const filterIdx = _currentFilters.indexOf(filter);
      _currentFilters.splice(filterIdx, 1);
    }

    onFilterChange?.(_currentFilters);
    setShowDropdown(false);
  };

  const updateActive = (index: number) => {
    const _currentFilters = Boolean(currentFilters?.length) ? [...currentFilters!] : [];
    _currentFilters.splice(index, 1);

    onFilterChange?.(_currentFilters);
  };

  const clearFilters = () => {
    onFilterChange?.([]);
  };

  const categoryFilter = filters?.find(filter => filter.type === 'category')?.options;
  const industryFilter = filters?.find(filter => filter.type === 'industry')?.options;

  if (!categoryFilter || !industryFilter) {
    return <React.Fragment></React.Fragment>;
  }

  return (
    <React.Fragment>
      <BarWrapper id="filters">
        <InsideWrapper>
          <Title>All Articles</Title>
          {Boolean(filters.length) && (
            <FilterStyled ref={dropdownWrapperRef} open={showDropdown}>
              <FilterButtonWrap onClick={handleDropdown}>
                <FilterLabel>Filters</FilterLabel>
                <DownLogo>
                  <StyledChevron />
                </DownLogo>
              </FilterButtonWrap>
              <Menu show={showDropdown}>
                <TitleContainer>TRENDING CATEGORIES</TitleContainer>
                {filters.map((filter, index) => (
                  <OptionContainer key={index}>
                    <CustomInput
                      id={`${filter.sys?.id ?? filter.id!}-${filter.name}`}
                      type="checkbox"
                      onChange={e => changeCheckbox(e, filter.sys?.id ?? filter.id!)}
                      value={currentFilters?.includes(filter.sys?.id ?? filter.id!) ? 'yes' : 'no'}
                      checked={currentFilters?.includes(filter.sys?.id ?? filter.id!)}
                    />
                    <LabelContainer htmlFor={`${filter.sys?.id ?? filter.id!}-${filter.name}`}>
                      {filter.name}
                    </LabelContainer>
                  </OptionContainer>
                ))}
              </Menu>
            </FilterStyled>
          )}
        </InsideWrapper>
      </BarWrapper>
      <TagWrapper>
        {Boolean(currentFilters?.length) && (
          <InsideWrapperTag>
            {currentFilters?.map((f, index) => (
              <StyledTag onClick={() => updateActive(index)} key={`tag-${index}`}>
                <TitleContainerTag>{f}</TitleContainerTag>
                <ImageContainer>
                  <CloseIcon />
                </ImageContainer>
              </StyledTag>
            ))}
            <ButtonWrapper>
              <ClearButton onClick={clearFilters}>Clear all</ClearButton>
            </ButtonWrapper>
          </InsideWrapperTag>
        )}
      </TagWrapper>
    </React.Fragment>
  );
};
