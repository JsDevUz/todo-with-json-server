import React from "react";
import { FaPlus } from "react-icons/fa";
function AddItems({ newItem, setNewItem, setItem }) {
  return (
    <form className="add-form" onSubmit={setItem}>
      <input
        className="add-input"
        placeholder="add task"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button className="add-btn">
        <FaPlus />
      </button>
    </form>
  );
}

export default AddItems;
