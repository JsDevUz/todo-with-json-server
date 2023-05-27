import React from "react";
import ItemsList from "./ItemsList";

function Content({ items, handleDelete, handleCheck }) {
  return (
    <>
      <ItemsList
        handleCheck={handleCheck}
        items={items}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default Content;
