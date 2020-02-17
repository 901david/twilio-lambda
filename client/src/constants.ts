import { ColDef } from "ag-grid-community";
import { TwilioMessageItem } from "./TwilioMessageItem";

interface IAppInitialState {
  columnDefs: Array<ColDef>;
  rowData: Array<TwilioMessageItem>;
  messagesLoaded: boolean;
  inputText: "";
}

export const columnDefs = [
  {
    headerName: "Account SID",
    field: "accountSid",
    sortable: true,
    filter: true,
    resizable: true
  },
  {
    headerName: "Body",
    field: "body",
    sortable: true,
    filter: true,
    resizable: true
  },
  {
    headerName: "Date Created",
    field: "dateCreated",
    sortable: true,
    filter: true,
    resizable: true
  },
  {
    headerName: "Date Sent",
    field: "dateSent",
    sortable: true,
    filter: true,
    resizable: true
  },
  {
    headerName: "Direction",
    field: "direction",
    sortable: true,
    filter: true,
    resizable: true
  },
  {
    headerName: "Error Code",
    field: "errorCode",
    sortable: true,
    filter: true,
    resizable: true
  },
  {
    headerName: "Error Message",
    field: "errorMessage",
    sortable: true,
    filter: true,
    resizable: true
  },
  {
    headerName: "From",
    field: "from",
    sortable: true,
    filter: true,
    resizable: true
  },
  {
    headerName: "Messaging Service SID",
    field: "messagingServiceSid",
    sortable: true,
    filter: true,
    resizable: true
  },
  {
    headerName: "Num Media",
    field: "numMedia",
    sortable: true,
    filter: true,
    resizable: true
  },
  {
    headerName: "Num Segments",
    field: "numSegments",
    sortable: true,
    filter: true,
    resizable: true
  },
  {
    headerName: "Price",
    field: "price",
    sortable: true,
    filter: true,
    resizable: true
  },
  {
    headerName: "SID",
    field: "sid",
    sortable: true,
    filter: true,
    resizable: true
  },
  {
    headerName: "Status",
    field: "status",
    sortable: true,
    filter: true,
    resizable: true
  },
  {
    headerName: "To",
    field: "to",
    sortable: true,
    filter: true,
    resizable: true
  },
  {
    headerName: "URI",
    field: "uri",
    sortable: true,
    filter: true,
    resizable: true
  }
];

export const AppInitialState: IAppInitialState = {
  columnDefs,
  rowData: [],
  messagesLoaded: false,
  inputText: ""
};
