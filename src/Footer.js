import React from "react";
import AddItems from "./AddItems";

function Footer({ newItem, setNewItem, setItem }) {
  return (
    <>
      <AddItems newItem={newItem} setNewItem={setNewItem} setItem={setItem} />
    </>
  );
}

export default Footer;
