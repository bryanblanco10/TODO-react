import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Header({ children}) {
  return (
    <header>
      <div className="title-app">
        TODOAPP <FontAwesomeIcon icon={faCoffee} />
      </div>
      { children }
    </header>
  );
}

export { Header };