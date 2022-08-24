import React from "react";

function TodoItem({ text, onCompleted, onDeleted }) {
  return (
    <React.Fragment>
      <li>
        <span onClick={() => onCompleted(text)}>C</span>
        <p>{text}</p>
        <span onClick={onDeleted}>X</span>
      </li>
    </React.Fragment>
  );
};

export { TodoItem };