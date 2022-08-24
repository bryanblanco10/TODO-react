import React from "react";
import { TodoContext } from "../todoContext/todoContext";

function TodoCreateButton() {
  const { setOpenModal } = React.useContext(TodoContext);
  const onClickButton = () => {
    // let state = null;
    // openModal ? state = false : state = true;
    setOpenModal(prevState => !prevState);
  }

  return (
    <React.Fragment>
      <button onClick={() => onClickButton()}>+</button>
    </React.Fragment>
  );
};

export { TodoCreateButton };