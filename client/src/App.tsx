import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { AgGridReact } from "ag-grid-react";

import { TwilioMessageItem } from "./TwilioMessageItem";
import { SpinnerWrapper, TableWrapper } from "./App-Components";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { ColDef, Grid } from "ag-grid-community";

interface IAppState {
  columnDefs: Array<ColDef>;
  rowData: Array<TwilioMessageItem>;
  messagesLoaded: boolean;
}

interface IAppProps {}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    const defaultProps = {
      sortable: true,
      filter: true,
      resizable: true
    };
    this.state = {
      columnDefs: [
        { headerName: "Account SID", field: "accountSid", ...defaultProps },
        { headerName: "Body", field: "body", ...defaultProps },
        { headerName: "Date Created", field: "dateCreated", ...defaultProps },
        { headerName: "Date Sent", field: "dateSent", ...defaultProps },
        { headerName: "Direction", field: "direction", ...defaultProps },
        { headerName: "Error Code", field: "errorCode", ...defaultProps },
        { headerName: "Error Message", field: "errorMessage", ...defaultProps },
        { headerName: "From", field: "from", ...defaultProps },
        {
          headerName: "Messaging Service SID",
          field: "messagingServiceSid",
          ...defaultProps
        },
        { headerName: "Num Media", field: "numMedia", ...defaultProps },
        { headerName: "Num Segments", field: "numSegments", ...defaultProps },
        { headerName: "Price", field: "price", ...defaultProps },
        { headerName: "SID", field: "sid", ...defaultProps },
        { headerName: "Status", field: "status", ...defaultProps },
        { headerName: "To", field: "to", ...defaultProps },
        { headerName: "URI", field: "uri", ...defaultProps }
      ],
      rowData: [],
      messagesLoaded: false
    };
  }

  componentDidMount() {
    axios
      .get("/messages")
      .then(({ data: messages }) => {
        console.log(messages);
        this.setState({ rowData: messages, messagesLoaded: true });
      })
      .catch(err => console.log(err));
  }

  onGridReady(GridApi: any) {
    console.log(GridApi);
    GridApi.api.sizeColumnsToFit();
  }

  render() {
    if (!this.state.messagesLoaded)
      return (
        <SpinnerWrapper>
          <FontAwesomeIcon icon={faSpinner} spin />
        </SpinnerWrapper>
      );

    return (
      <TableWrapper className="ag-theme-balham">
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          onGridReady={this.onGridReady}
          animateRows
        ></AgGridReact>
      </TableWrapper>
    );
  }
}

export default App;
