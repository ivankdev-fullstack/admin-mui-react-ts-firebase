import { useQuery } from "@tanstack/react-query";
import { CACHE_PRODUCTS } from "../data/queryKeys";
import { productRepository } from "../firebase/api/product";
import { ProductsTableRowsType } from "../interfaces/products";

export const useProducts = () =>
  useQuery<ProductsTableRowsType | null>({
    queryKey: [CACHE_PRODUCTS],
    queryFn: () => productRepository.getAll(),
  });
