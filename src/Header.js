import React from "react";
import SearchItems from "./SearchItems";

function Header({ handleSearch }) {
  return (
    <div className="header">
      <header>Todo List</header>
      <SearchItems className="search" handleSearch={handleSearch} />
    </div>
  );
}

export default Header;
