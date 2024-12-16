import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { queryClient } from "../../App";
import { productRepository } from "../../firebase/api/product";
import { userRepository } from "../../firebase/api/user";
import { UsersTableRowsType } from "../../interfaces/users";
import "./DataTable.scss";
import { ProductsTableRowsType } from "../../interfaces/products";

interface Props {
  slug: "users" | "products";
  rows: UsersTableRowsType[] | ProductsTableRowsType[];
  columns: GridColDef[];
}

const DataTable = ({ slug, rows, columns }: Props) => {
  const mutation = useMutation({
    mutationFn: (id: string) =>
      slug === "users"
        ? userRepository.deleteById(id)
        : productRepository.deleteById(id),
    onSuccess: () => {
      queryClient.invalidateQueries([`${slug.toUpperCase()}`]);
    },
  });

  const handleDelete = (id: string) => {
    mutation.mutate(id);
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: ({ row }) => (
      <div className="action">
        <Link to={`/${slug}/${row.id}`}>
          <img src="/view.png" alt="" />
        </Link>
        <div className="delete" onClick={() => handleDelete(row.id)}>
          <img src="/delete.svg" alt="" />
        </div>
      </div>
    ),
  };

  return (
    <div className="dataTable">
      {rows?.length ? (
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
      ) : (
        "No data."
      )}
    </div>
  );
};

export default DataTable;
