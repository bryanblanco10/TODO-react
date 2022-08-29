import React from "react";

function TodoList(props) {
  return (
    <React.Fragment>
      <section className="section-app">
        <div>
          {props.children}
        </div>
      </section>
    </React.Fragment>
  );
};

export { TodoList };