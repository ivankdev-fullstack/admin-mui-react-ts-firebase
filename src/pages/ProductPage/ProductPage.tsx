import Single from "../../components/SingleEntityInfo/SingleEntityInfo";
import { singleProduct } from "../../data";
import "./ProductPage.scss";

const ProductPage = () => {
  return <Single {...singleProduct} />;
};

export default ProductPage;
