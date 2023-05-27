import React from "react";
import { FaTrash } from "react-icons/fa";
function LineItems({ item, handleCheck, handleDelete }) {
  console.log(item);
  return (
    <li
      className="one-line"
      style={item.checked ? { textDecoration: "line-through" } : null}
    >
      <input
        checked={item.checked}
        type="checkbox"
        onChange={() => handleCheck(item.id)}
      />
      <span className="item">{item.item}</span>
      <FaTrash className="trash" onClick={() => handleDelete(item.id)} />
    </li>
  );
}

export default LineItems;
