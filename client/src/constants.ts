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
    resizable: true,
    minWidth: 150,
    width: 150
  },
  {
    headerName: "Date Created",
    field: "dateCreated",
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 150
  },
  {
    headerName: "Date Sent",
    field: "dateSent",
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 150,
    pinned: "left"
  },
  {
    headerName: "Direction",
    field: "direction",
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 100
  },
  {
    headerName: "From",
    field: "from",
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 50,
    width: 100,
    pinned: "left"
  },
  {
    headerName: "Num Media",
    field: "numMedia",
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 150
  },
  {
    headerName: "Num Segments",
    field: "numSegments",
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 150
  },
  {
    headerName: "Price",
    field: "price",
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 50,
    width: 100
  },
  {
    headerName: "SID",
    field: "sid",
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 50,
    width: 100
  },
  {
    headerName: "Status",
    field: "status",
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 50,
    width: 100
  },
  {
    headerName: "To",
    field: "to",
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 50,
    width: 100,
    pinned: "left"
  },
  {
    headerName: "Body",
    field: "body",
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 150,
    width: 400,
    pinned: "left"
  },
  {
    headerName: "URI",
    field: "uri",
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 100,
    width: 100
  },
  {
    headerName: "Error Code",
    field: "errorCode",
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 150
  },
  {
    headerName: "Error Message",
    field: "errorMessage",
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 150
  },
  {
    headerName: "Messaging Service SID",
    field: "messagingServiceSid",
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 100,
    width: 150
  }
];

export const AppInitialState: IAppInitialState = {
  columnDefs,
  rowData: [],
  messagesLoaded: false,
  inputText: ""
};
