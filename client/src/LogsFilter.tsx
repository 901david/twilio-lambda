import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;

  svg {
    margin-right: 10px;
    font-size: 30px;
  }

  input {
    width: 65vw;
    border: 2px solid black;

    &:focus {
      border: 2px solid blue;
    }
  }
`;

interface ILogsFilterProps {
  onFilter: (event: React.SyntheticEvent) => void;
  inputText: string;
}

export const LogsFilter: React.FC<ILogsFilterProps> = ({
  onFilter,
  inputText
}) => {
  return (
    <SearchBarWrapper>
      <FontAwesomeIcon icon={faSearch} />
      <input onChange={onFilter} value={inputText} />
    </SearchBarWrapper>
  );
};
