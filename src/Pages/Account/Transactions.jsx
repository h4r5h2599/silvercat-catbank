import { DataGrid } from "@mui/x-data-grid";
import useMyContext from "../../useMyContext";
import data from "../../Assets/transactions.json";
import "./Transactions.css";

const uuid = require("uuid");

const Transactions = () => {
  const { theme } = useMyContext();
  const doNothing = () => {};

  const rows = [];
  const columns = [];

  Object.keys(data[0]).forEach((field) => {
    columns.push({
      field,
      headerName: field,
      filterable: false,
      disableColumnMenu: true,
      sortable: false,
      flex: 1,
    });
  });

  data.forEach((row) => {
    rows.push({
      ID: uuid.v4(),
      ...row,
    });
  });

  const dataGridSx = {
    "& .MuiDataGrid-footerContainer": {},
    "& .MuiDataGrid-columnHeaders": {},
    "& .MuiDataGrid-columnHeader": {
      backgroundColor: theme.secondary,
      color: theme.pText,
    },
    "& .MuiTablePagination-selectLabel": {
      fontSize: "0.8em",
      color: theme.pText,
    },
    "& .MuiSelect-select": {
      fontSize: "0.8em",
      color: theme.pText,
    },
    "& .MuiSvgIcon-root": {
      color: theme.pText,
    },
    "& .MuiTouchRipple-root": {
      position: "relative",
    },
    "& .MuiTablePagination-displayedRows": {
      fontSize: "0.8em",
      color: theme.pText,
    },
    "& .MuiDataGrid-cell": {
      fontSize: "0.8em",
    },
    border: "2px solid " + theme.accent,
    color: theme.pText,
    backgroundColor: theme.primary,
  };

  return (
    <DataGrid
      sx={dataGridSx}
      density="standard"
      editMode="cell"
      hideFooterSelectedRowCount
      rowHeight={35}
      columnHeaderHeight={40}
      footerHeight={30}
      rows={rows}
      columns={columns}
      getRowId={(row) => row.ID}
      getRowClassName={(params) => {
        return "transaction" + params.row["In / Out"];
      }}
      rowsPerPageOptions={[5, 10, 20]}
      onRowClick={doNothing}
      onCellClick={doNothing}
      onRowDoubleClick={doNothing}
    />
  );
};

export default Transactions;
