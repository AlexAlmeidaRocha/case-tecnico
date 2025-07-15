import React from "react";
import {
  StyledSearchInput,
  SearchContainer,
  SearchIcon,
} from "./SearchInput.styles";
import type { SearchInputProps } from "./SearchInput.interfaces";
import { BiSearch } from "react-icons/bi";

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Digite para pesquisar...",
  ...rest
}) => {
  return (
    <SearchContainer>
      <StyledSearchInput type="text" placeholder={placeholder} {...rest} />
      <SearchIcon>
        <BiSearch />
      </SearchIcon>
    </SearchContainer>
  );
};

export default SearchInput;
