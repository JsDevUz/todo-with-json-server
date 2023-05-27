import React from "react";
import LineItems from "./LineItems";

function ItemsList({ items, handleDelete, handleCheck }) {
  return (
    <>
      {items?.length > 0 ? (
        <ul className="items-list">
          {items?.map((item) => (
            <LineItems
              handleCheck={handleCheck}
              handleDelete={handleDelete}
              key={item.id}
              item={item}
            />
          ))}
        </ul>
      ) : (
        <span>Todo list is empty</span>
      )}
    </>
  );
}

export default ItemsList;
