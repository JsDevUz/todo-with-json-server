import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("todolist"))
  );
  const [searchText, setSearchText] = useState("");
  const [newItem, setNewItem] = useState("");

  const saveAsLocalStorage = (items) => {
    setItems(items);
    localStorage.setItem("todolist", JSON.stringify(items));
  };
  const setItem = (e) => {
    e.preventDefault();
    if (!newItem) return;

    const myItem = {
      id: items?.length ? items[items.length - 1].id + 1 : 1,
      checked: false,
      item: newItem,
    };
    console.log(items);
    const newOne = items ? [...items, myItem] : [myItem];
    saveAsLocalStorage(newOne);
    setNewItem("");
  };
  const handleCheck = (id) => {
    const newOne = items.map((i) =>
      i.id === id ? { ...i, checked: !i.checked } : i
    );
    saveAsLocalStorage(newOne);
  };
  const handleDelete = (id) => {
    const newOne = items.filter((i) => i.id !== id);
    saveAsLocalStorage(newOne);
  };
  const handleSearch = (text) => {
    setSearchText(text);
  };
  return (
    <div className="App">
      <Header
        handleSearch={handleSearch}
        setNewItem={setNewItem}
        newItem={newItem}
        setItem={setItem}
      />
      <Content
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        items={items?.filter((i) =>
          i.item.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        )}
      />
      <Footer setNewItem={setNewItem} newItem={newItem} setItem={setItem} />
    </div>
  );
}

export default App;
