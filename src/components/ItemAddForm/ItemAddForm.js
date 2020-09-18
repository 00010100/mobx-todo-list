import React, { useState } from "react";
import { observer } from "mobx-react";

import { useTodosStore } from "../../stores";

import "./ItemAddForm.css";

const ItemAddForm = observer(() => {
  const todosStore = useTodosStore();
  const [label, setLabel] = useState("");

  const onLabelChange = (event) => {
    setLabel(event.target.value);
  };

  const onSubmit = (event) => {
    if (label === "") return;

    event.preventDefault();
    todosStore.createTodo(label);
    setLabel("");
  };

  return (
    <form className="item-add-form d-flex" onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control"
        onChange={onLabelChange}
        placeholder="What needs to be done?"
        value={label}
      />
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={onSubmit}
      >
        Add Item
        <i className="fa fa-add" />
      </button>
    </form>
  );
});

export default ItemAddForm;
