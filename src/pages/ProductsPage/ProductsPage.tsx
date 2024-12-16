import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import NewTableItemForm from "../../components/NewTableItemForm/NewTableItemForm";
import ProductsTable, {
  productColumns,
} from "../../components/ProductsTable/ProductsTable";
import { CACHE_PRODUCTS } from "../../data/queryKeys";
import { productRepository } from "../../firebase/api/product";
import "./ProductsPage.scss";

const ProductsPage = () => {
  const [isOpen, setOpen] = useState(false);
  const { data, isLoading } = useQuery({
    queryKey: [CACHE_PRODUCTS],
    queryFn: () => productRepository.getAll(),
  });

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Product</button>
      </div>
      {isLoading ? "Loading..." : <ProductsTable products={data as any} />}
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
