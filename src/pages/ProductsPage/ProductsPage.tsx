import { useState } from "react";
import NewTableItemForm from "../../components/NewTableItemForm/NewTableItemForm";
import ProductsTable, {
  productColumns,
} from "../../components/ProductsTable/ProductsTable";
import { products } from "../../data";
import "./ProductsPage.scss";

const ProductsPage = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Product</button>
      </div>
      <ProductsTable products={products} />
      {isOpen && (
        <NewTableItemForm
          slug="product"
          columns={productColumns}
          setOpen={setOpen}
        />
      )}
    </div>
  );
};

export default ProductsPage;
