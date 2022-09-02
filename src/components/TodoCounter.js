import React from "react";

function TodoCounter({ completedTodos, totalTodos }) {
  return (
    <React.Fragment >
      <h2 className="subtitle-app">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    </React.Fragment>
  );
}

export { TodoCounter };