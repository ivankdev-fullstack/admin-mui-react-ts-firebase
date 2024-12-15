import DataTable, { DataTableColumnType } from "../DataTable/DataTable";

export type UsersTableRowsType = {
  id: number;
  img: string;
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  createdAt: string;
  verified?: boolean;
}[];

export const userColumns: DataTableColumnType = [
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
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];

interface Props {
  users: UsersTableRowsType;
}

const UsersTable = ({ users }: Props) => {
  return <DataTable slug="users" rows={users} columns={userColumns} />;
};

export default UsersTable;
