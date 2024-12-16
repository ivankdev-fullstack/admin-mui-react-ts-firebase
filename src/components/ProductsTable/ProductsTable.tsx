import { GridColDef } from "@mui/x-data-grid";
import { ProductsTableRowsType } from "../../interfaces/products";
import DataTable from "../DataTable/DataTable";

export const productColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: ({ row }) => <img src={row.img || "/noavatar.png"} alt="" />,
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];

interface Props {
  products: ProductsTableRowsType[];
}

const ProductsTable = ({ products }: Props) => {
  return <DataTable slug="products" rows={products} columns={productColumns} />;
};

export default ProductsTable;
