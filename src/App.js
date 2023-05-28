import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import apiRequest from "./apiRequest";
function App() {
  const [items, setItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [newItem, setNewItem] = useState("");
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const API_URL = 'http://localhost:3500/items'

  const setItem = async (e) => {
    e.preventDefault();
    if (!newItem) return;

    const myItem = {
      id: items?.length ? items[items.length - 1].id + 1 : 1,
      checked: false,
      item: newItem,
    };
    const newOne = items ? [...items, myItem] : [myItem];
    setItems(newOne);
    setNewItem("");
    const addOption = {
      method: 'Post',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(myItem)
    }
    const result = await apiRequest(API_URL, addOption);
    if (result) setError(result)

  };
  const handleCheck = async (id) => {
    const newOne = items.map((i) =>
      i.id === id ? { ...i, checked: !i.checked } : i
    );
    setItems(newOne);
    const myItem = items.filter(i => i.id === id);
    const checkOption = {
      method: 'PATCH',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ checked: myItem[0].checked })
    }
    const result = await apiRequest(`${API_URL}/${id}`, checkOption);
    if (result) setError(result)
  };
  const handleDelete = async (id) => {
    const newOne = items.filter((i) => i.id !== id);
    setItems(newOne);
    const deleteOption = { method: 'DELETE' }
    const result = await apiRequest(`${API_URL}/${id}`, deleteOption);
    if (result) setError(result)
  };
  const handleSearch = (text) => {
    setSearchText(text);
  };
  useEffect(() => {
    const fetchItems = async () => {
      try {

        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Data not uploaded')
        const listItems = await response.json()
        setItems(listItems)
      } catch (e) {
        setError(e)
      } finally {
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())()
    }, 2000)
  }, [])
  return (
    <div className="App">
      <Header
        handleSearch={handleSearch}
        setNewItem={setNewItem}
        newItem={newItem}
        setItem={setItem}
      />
      <main>
        {isLoading && 'loading...'}
        {error && `Error: ${error}`}
        {!isLoading && !error &&
          <Content
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            items={items?.filter((i) =>
              i.item.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
            )}
          />}
      </main>

      <Footer setNewItem={setNewItem} newItem={newItem} setItem={setItem} />
    </div>
  );
}

export default App;
