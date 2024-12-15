import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import {
  DataTableColumnType,
  DataTableRowType,
} from "../../pages/UsersPage/UsersPage";
import "./DataTable.scss";

interface Props {
  slug: string;
  rows: DataTableRowType;
  columns: DataTableColumnType;
}

const DataTable = ({ slug, rows, columns }: Props) => {
  const handleDelete = (id: number) => {
    // api call
    console.log(id, "id has been deleted.");
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: ({ row }) => (
      <div className="action">
        <Link to={`/${slug}/${row.id}`}>
          <img src="/view.svg" alt="" />
        </Link>
        <div className="delete" onClick={() => handleDelete(row.id)}>
          <img src="/delete.svg" alt="" />
        </div>
      </div>
    ),
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={rows}
        columns={[...columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
