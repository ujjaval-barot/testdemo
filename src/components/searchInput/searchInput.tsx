import React, {useEffect, useState} from 'react';
import {SearchContainer, SearchTextInput} from 'components/searchInput/searchInput.styled';
import {PrimaryButtonDark} from 'components/buttons/primaryIconDark/primaryIconDark.styles';

interface SearchInputProps {
  value: string;
  onSearch: (value: string) => void;
  loading: boolean;
}

export const SearchInput: React.FC<SearchInputProps> = (props): JSX.Element => {
  const [inputValue, setInputValue] = useState(props.value);

  useEffect(() => {
    setInputValue(props.value);
  }, [props.value]);

  // Update the input value
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // Handle search button click
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload
    if (!props.loading) {
      props.onSearch(inputValue);
    }
  };

  return (
    <SearchContainer onSubmit={handleSearch}>
      <SearchTextInput placeholder="Search for articles" value={inputValue} onChange={handleInputChange} />
      <PrimaryButtonDark disabled={props.loading} type="submit">
        {props.loading ? 'Searching...' : 'Search'}
      </PrimaryButtonDark>
    </SearchContainer>
  );
};
