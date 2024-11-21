import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Action = () => {
  return (
    <>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button type="button" className="btn btn-danger">
          <MdDelete />
        </button>
        <button type="button" className="btn btn-warning">
          <FaEdit />
        </button>
        <button type="button" className="btn btn-success">
          <FaEye />
        </button>
      </div>
    </>
  );
};

export default Action;
