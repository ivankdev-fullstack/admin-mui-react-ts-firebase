import { GridColDef } from "@mui/x-data-grid";
import { UsersTableRowsType } from "../../interfaces/users";
import DataTable from "../DataTable/DataTable";

export const userColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: ({ row }) => <img src={row.img || "/noavatar.png"} alt="" />,
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
];

interface Props {
  users: UsersTableRowsType[];
}

const UsersTable = ({ users }: Props) => {
  return <DataTable slug="users" rows={users} columns={userColumns} />;
};

export default UsersTable;
