import React from "react";
import { TodoContext } from "../todoContext/todoContext";
// Components
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoCreateButton } from "../components/TodoCreateButton";
import { Modal } from "../components/modal/Modal";
import { TodoForm } from "../components/modal/TodoForm";

function AppUI() {
  const {
    error,
    loading,
    searchTodos,
    onCompleted,
    onDeleted,
    openModal,
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {error && <p>Desesperate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no te desesperes...</p>}
        {!loading && !searchTodos.length && <p>Crea tu primer TODO!</p>}

        {searchTodos.map((todo, index) => (
          <TodoItem
            text={todo.text}
            key={index}
            onCompleted={onCompleted}
            onDeleted={() => onDeleted(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <TodoCreateButton />
    </React.Fragment>
  );
}

export { AppUI };
