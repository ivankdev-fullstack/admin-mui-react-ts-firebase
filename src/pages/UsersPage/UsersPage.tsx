import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import NewTableItemForm from "../../components/NewTableItemForm/NewTableItemForm";
import UsersTable, {
  userColumns,
} from "../../components/UsersTable/UsersTable";
import { CACHE_USERS } from "../../data/queryKeys";
import { userRepository } from "../../firebase/api/user";
import "./UsersPage.scss";

const UsersPage = () => {
  const [isOpen, setOpen] = useState(false);
  const { data, isLoading } = useQuery({
    queryKey: [CACHE_USERS],
    queryFn: () => userRepository.getAll(),
  });

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      {isLoading ? "Loading..." : <UsersTable users={data} />}
      {isOpen && (
        <NewTableItemForm slug="user" columns={userColumns} setOpen={setOpen} />
      )}
    </div>
  );
};

export default UsersPage;
