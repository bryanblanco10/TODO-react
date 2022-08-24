import "../assets/css/style.css";
import React from "react";
import { TodoProvider } from "../todoContext/todoContext";
import { AppUI } from "./AppUI";

function App() {
  return (
    <TodoProvider>
      <AppUI></AppUI>
    </TodoProvider>
  );
}

export default App;