import { useState } from "react";
import mockData from "./assets/mockData";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    console.log(search);
  };

  const handleSuggestions = (name) => {
    console.log(name);
    setSearch(name);
  };

  return (
    <div className="search-main-container">
      <div className="search">
        <h1 className="search-title">Search Bar</h1>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <div className="dropdown">
          {mockData
            .filter((item) => {
              const searchValue = search.toLowerCase();
              const lowerItem = item.name.toLowerCase();

              return (
                searchValue &&
                lowerItem.startsWith(searchValue) &&
                item.name !== search
              );
            })
            .slice(0, 10)
            .map((item) => (
              <p
                className="suggestion"
                onClick={() => handleSuggestions(item.name)}
                key={item.id}
              >
                {item.name}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
