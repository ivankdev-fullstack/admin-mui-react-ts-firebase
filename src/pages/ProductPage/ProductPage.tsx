import Single from "../../components/SingleEntityInfo/SingleEntityInfo";
import { singleProduct } from "../../data/productsData";
import "./ProductPage.scss";

const ProductPage = () => {
  return <Single {...singleProduct} />;
};

export default ProductPage;
