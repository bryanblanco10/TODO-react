import React from "react";

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }
  return (
    <React.Fragment>
      <div className="search">
        <input 
          onChange={onSearchValueChange} 
          type="search"
          value={searchValue}
          placeholder="Buscar todo"
        />
      </div>
    </React.Fragment>
  );
};

export { TodoSearch };