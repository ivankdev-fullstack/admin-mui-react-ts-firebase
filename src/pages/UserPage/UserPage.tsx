import SingleEntityInfo from "../../components/SingleEntityInfo/SingleEntityInfo";
import { singleUser } from "../../data/usersData";
import "./UserPage.scss";

const UserPage = () => {
  return <SingleEntityInfo {...singleUser} />;
};

export default UserPage;
