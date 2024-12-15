import Single from "../../components/SingleEntityInfo/SingleEntityInfo";
import { singleUser } from "../../data";
import "./UserPage.scss";

const UserPage = () => {
  return <Single {...singleUser} />;
};

export default UserPage;
