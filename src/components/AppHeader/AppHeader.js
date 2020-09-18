import React from "react";
import { observer } from "mobx-react";
import { useTodosStore } from "../../stores";

import "./AppHeader.css";

const AppHeader = observer(() => {
  const store = useTodosStore();

  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>
        {store.todoCount} more to do, {store.doneCount} done
      </h2>
    </div>
  );
});

export default AppHeader;
