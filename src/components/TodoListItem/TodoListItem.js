import React from "react";
import classNames from "classnames";

import "./TodoListItem.css";

const TodoListItem = ({
  label,
  done,
  important,
  onDeleted,
  onToggleDone,
  onToggleImportant,
}) => (
  <span
    className={classNames("todo-list-item", {
      done,
      important,
    })}
  >
    <span className="todo-list-item-label" onClick={onToggleDone}>
      {label}
    </span>
    <button
      type="button"
      className={classNames(
        `btn btn-sm float-right ${
          important ? "btn-success" : "btn-outline-success"
        }`
      )}
      onClick={onToggleImportant}
    >
      <i className="fa fa-exclamation" />
    </button>
    <button
      type="button"
      className="btn btn-outline-danger btn-sm float-right"
      onClick={onDeleted}
    >
      <i className="fa fa-trash-o" />
    </button>
  </span>
);

export default TodoListItem;
