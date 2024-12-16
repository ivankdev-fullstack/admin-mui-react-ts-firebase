import { GridColDef } from "@mui/x-data-grid";
import { useForm } from "react-hook-form";
import { queryClient } from "../../App";
import { productRepository } from "../../firebase/api/product";
import { userRepository } from "../../firebase/api/user";
import "./NewTableItemForm.scss";

interface Props {
  slug: "user" | "product";
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewTableItemForm = ({ slug, columns, setOpen }: Props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    if (slug === "user") {
      await userRepository.save(data);
    } else {
      await productRepository.save(data);
    }
    setOpen(false);
    queryClient.invalidateQueries([`${slug.toUpperCase()}S`]);
  });

  return (
    <div className="form-container">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
          X
        </span>
        <h1>Add new {slug}</h1>
        <form onSubmit={onSubmit}>
          {columns
            .filter((c) => c.field !== "id" && c.field !== "img")
            .map((c, idx) => (
              <div className="item" key={idx}>
                <label>{c.headerName}</label>
                <input
                  type={c.type}
                  placeholder={c.field}
                  {...register(c.field)}
                />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default NewTableItemForm;
