import React from "react";
import { TodoSearch } from "../TodoSearch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <header>
      <div className="title-app">
        TODOAPP <FontAwesomeIcon icon={faCoffee} />
      </div>
      <TodoSearch />
    </header>
  );
}

export { Header };