import { useState } from "react";
import NewTableItemForm from "../../components/NewTableItemForm/NewTableItemForm";
import UsersTable, {
  userColumns,
} from "../../components/UsersTable/UsersTable";
import { useUsers } from "../../hooks/useUsers";
import "./UsersPage.scss";

const UsersPage = () => {
  const [isOpen, setOpen] = useState(false);
  const { data, isLoading } = useUsers();

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      {isLoading ? "Loading..." : <UsersTable users={data!} />}
      {isOpen && (
        <NewTableItemForm slug="user" columns={userColumns} setOpen={setOpen} />
      )}
    </div>
  );
};

export default UsersPage;
