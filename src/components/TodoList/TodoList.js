import React from "react";
import { observer } from "mobx-react";

import { useTodosStore } from "../../stores";
import TodoListItem from "../TodoListItem";

import "./TodoList.css";

const TodoList = observer(() => {
  const todosStore = useTodosStore();

  const elements = todosStore.visibleTodos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onDeleted={() => todosStore.deleteTodo(id)}
          onToggleImportant={() => todosStore.onToggleProp(id, "important")}
          onToggleDone={() => todosStore.onToggleProp(id, "done")}
        />
      </li>
    );
  });

  if (!elements.length) {
    return (
      <ul className="list-group todo-list">
        <li className="list-group-item">
          <span className="todo-list-item-label">
            No todos yet.
          </span>
        </li>
      </ul>
    );
  }

  return <ul className="list-group todo-list">{elements}</ul>;
});

export default TodoList;
