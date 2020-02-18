import styled, { css } from "styled-components";

const flexCenteredBoth = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  ${flexCenteredBoth}
  svg {
    font-size: 75px;
  }
`;

export const TableWrapper = styled.div`
  height: 60vh;
  width: 90vw;
  margin-left: 5vw;
  margin-top: 10vh;
  overflow: scroll;

  .ag-header-cell-label {
    ${flexCenteredBoth}
  }
`;

export const Main = styled.main`
  text-align: center;
`;
