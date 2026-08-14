import TableRow from "./TableRow";
import { deleteUs } from "../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";

function Table({ onEdit }) {
  const count = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteUs(id));
  }

  return (
    <div className="flex items-center justify-center py-10">
      <div className="w-[90vw] overflow-x-auto rounded-xl shadow-md border border-gray-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wide">
              <th className="px-4 py-3 font-semibold">N</th>
              <th className="px-4 py-3 font-semibold">FirstName</th>
              <th className="px-4 py-3 font-semibold">LastName</th>
              <th className="px-4 py-3 font-semibold">Age</th>
              <th className="px-4 py-3 font-semibold">Email</th>
              <th className="px-4 py-3 font-semibold">Phone</th>
              <th className="px-4 py-3 font-semibold">City</th>
              <th className="px-4 py-3 font-semibold">Profession</th>
              <th className="px-4 py-3 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {count.map((user, index) => (
              <TableRow
                user={user}
                index={index}
                key={user.id}
                handleDelete={handleDelete}
                handleEdit={onEdit}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
