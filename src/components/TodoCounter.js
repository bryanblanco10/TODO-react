import React from "react";
import { TodoContext } from "../todoContext/todoContext";

function TodoCounter() {
  const {completedTodos, totalTodos} = React.useContext(TodoContext);
  return (
    <React.Fragment >
      <h2 className="title">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    </React.Fragment>
  );
}

export { TodoCounter };