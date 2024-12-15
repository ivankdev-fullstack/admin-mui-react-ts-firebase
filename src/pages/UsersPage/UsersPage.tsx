import { useState } from "react";
import NewTableItemForm from "../../components/NewTableItemForm/NewTableItemForm";
import UsersTable, {
  userColumns,
} from "../../components/UsersTable/UsersTable";
import { userRows } from "../../data";
import "./UsersPage.scss";

const UsersPage = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <UsersTable users={userRows} />
      {isOpen && (
        <NewTableItemForm slug="user" columns={userColumns} setOpen={setOpen} />
      )}
    </div>
  );
};

export default UsersPage;
