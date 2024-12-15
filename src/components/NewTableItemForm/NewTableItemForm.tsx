import { DataTableColumnType } from "../DataTable/DataTable";
import "./NewTableItemForm.scss";

interface Props {
  slug: string;
  columns: DataTableColumnType;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewTableItemForm = ({ slug, columns, setOpen }: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Send form data");
  };

  return (
    <div className="form-container">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
          X
        </span>
        <h1>Add new {slug}</h1>
        <form onSubmit={handleSubmit}>
          {columns
            .filter((c) => c.field !== "id" && c.field !== "img")
            .map((c) => (
              <div className="item">
                <label>{c.headerName}</label>
                <input type={c.type} placeholder={c.field} />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default NewTableItemForm;
