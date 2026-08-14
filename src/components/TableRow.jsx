import React from "react";
import Button from "./Button";

function TableRow({ user, index, handleDelete, handleEdit }) {
  return (
    <tr key={user.id} className="border-b border-gray-200">
      <td className="px-4 py-3 text-sm text-gray-700">{index + 1}</td>
      <td className="px-4 py-3 text-sm text-gray-700">{user.firstName}</td>
      <td className="px-4 py-3 text-sm text-gray-700">{user.lastName}</td>
      <td className="px-4 py-3 text-sm text-gray-700">{user.age}</td>
      <td className="px-4 py-3 text-sm text-gray-700">{user.email}</td>
      <td className="px-4 py-3 text-sm text-gray-700">{user.phone}</td>
      <td className="px-4 py-3 text-sm text-gray-700">{user.city}</td>
      <td className="px-4 py-3 text-sm text-gray-700">{user.profession}</td>
      <td className="px-4 py-3 text-center flex gap-1.5">
        <Button
          variant="primary"
          text="edit"
          onClick={() => handleEdit(user)}
        />
        <Button
          variant="secondary"
          text="delete"
          onClick={() => handleDelete(user.id)}
        />
      </td>
    </tr>
  );
}

export default TableRow;
