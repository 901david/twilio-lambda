import React, { useEffect, SyntheticEvent } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { AgGridReact } from "ag-grid-react";
import { useMappedState } from "react-use-mapped-state";

import { SpinnerWrapper, TableWrapper, Main } from "./App-Components";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { AppInitialState } from "./constants";
import { LogsFilter } from "./LogsFilter";

const App: React.FC<{}> = () => {
  const [
    { messagesLoaded, columnDefs, rowData, inputText },
    stateSetter
  ] = useMappedState(AppInitialState);
  useEffect(() => {
    axios
      .get("/messages")
      .then(({ data: messages }) => {
        console.log("Are these messages?", messages);
        stateSetter(["rowData", "messagesLoaded"], [messages, true]);
      })
      .catch(err => console.log(err));
  });

  const onGridReady = (GridApi: any) => {
    GridApi.api.sizeColumnsToFit();
  };

  const onLogsFilter = (event: SyntheticEvent<Element, Event>) => {
    //For some Reason value not on this type, but it is...
    const target = event.target as any;
    if (target) stateSetter("inputText", target.value);
  };

  if (!messagesLoaded)
    return (
      <SpinnerWrapper>
        <FontAwesomeIcon data-testid="loader-present" icon={faSpinner} spin />
      </SpinnerWrapper>
    );

  return (
    <Main>
      <h1>Twilio Lambda Logs</h1>
      <LogsFilter onFilter={onLogsFilter} inputText={inputText} />
      <TableWrapper className="ag-theme-balham">
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          onGridReady={onGridReady}
          animateRows
          quickFilterText={inputText}
        ></AgGridReact>
      </TableWrapper>
    </Main>
  );
};

export default App;
