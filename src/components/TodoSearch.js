import React from "react";
import { TodoContext } from "../todoContext/todoContext";

function TodoSearch() {
  const {searchValue, setSearchValue } = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
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