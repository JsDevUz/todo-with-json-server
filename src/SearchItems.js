import React from "react";

function SearchItems({ handleSearch }) {
  return (
    <form>
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
  );
}

export default SearchItems;
